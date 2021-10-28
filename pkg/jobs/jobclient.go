package jobs

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"strings"
	"time"

	"github.com/kubeshop/testkube/internal/pkg/api/repository/result"
	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
	"github.com/kubeshop/testkube/pkg/k8sclient"
	batchv1 "k8s.io/api/batch/v1"
	v1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/util/wait"
	"k8s.io/client-go/kubernetes"
	pods "k8s.io/client-go/kubernetes/typed/core/v1"
)

type JobClient struct {
	ClientSet  *kubernetes.Clientset
	Repository result.Repository
	Namespace  string
	Cmd        string
}

func NewJobClient() (*JobClient, error) {
	clientSet, err := k8sclient.ConnectToK8s()
	if err != nil {
		return nil, err
	}

	return &JobClient{
		ClientSet: clientSet,
		Namespace: "testkube",
	}, nil
}

func (c *JobClient) LaunchK8sJob(image string, repo result.Repository, execution testkube.Execution) (testkube.ExecutionResult, error) {
	jobs := c.ClientSet.BatchV1().Jobs(c.Namespace)
	podsClient := c.ClientSet.CoreV1().Pods(c.Namespace)
	var result string

	jsn, err := json.Marshal(execution)
	if err != nil {
		return testkube.ExecutionResult{
			Status:       testkube.StatusPtr(testkube.ERROR__ExecutionStatus),
			ErrorMessage: err.Error(),
		}, err
	}

	var TTLSecondsAfterFinished int32 = 180
	var backOffLimit int32 = 2
	jobSpec := &batchv1.Job{
		ObjectMeta: metav1.ObjectMeta{
			Name:      execution.Id,
			Namespace: c.Namespace,
		},
		Spec: batchv1.JobSpec{
			TTLSecondsAfterFinished: &TTLSecondsAfterFinished,
			Template: v1.PodTemplateSpec{
				Spec: v1.PodSpec{
					Containers: []v1.Container{
						{
							Name:            execution.Id,
							Image:           image,
							Command:         []string{"agent", string(jsn)},
							ImagePullPolicy: v1.PullAlways,
						},
					},
					RestartPolicy: v1.RestartPolicyNever,
				},
			},
			BackoffLimit: &backOffLimit,
		},
	}

	_, err = jobs.Create(context.TODO(), jobSpec, metav1.CreateOptions{})
	if err != nil {
		return testkube.ExecutionResult{
			Status:       testkube.StatusPtr(testkube.ERROR__ExecutionStatus),
			ErrorMessage: err.Error(),
		}, err
	}

	pods, err := c.GetJobPods(podsClient, execution.Id, 1, 5)
	if err != nil {
		return testkube.ExecutionResult{
			Status:       testkube.StatusPtr(testkube.ERROR__ExecutionStatus),
			ErrorMessage: err.Error(),
		}, err
	}

	execResult := testkube.ExecutionResult{}

	for _, pod := range pods.Items {
		if pod.Status.Phase != v1.PodRunning {
			go func() {
				if pod.Labels["job-name"] == execution.Id {
					if err := wait.PollImmediate(time.Second, time.Duration(0)*time.Second, k8sclient.HasPodSucceeded(c.ClientSet, pod.Name, c.Namespace)); err != nil {
						execResult = testkube.ExecutionResult{
							Status:       testkube.StatusPtr(testkube.ERROR__ExecutionStatus),
							ErrorMessage: err.Error(),
						}

						repo.UpdateResult(context.TODO(), execution.Id, execResult)
						return
					}
				}
				result, err = c.GetPodLogs(pod.Name, execution, repo, false)
				if err != nil {
					execResult = testkube.ExecutionResult{
						Status:       testkube.StatusPtr(testkube.ERROR__ExecutionStatus),
						ErrorMessage: err.Error(),
					}
					repo.UpdateResult(context.TODO(), execution.Id, execResult)
					return
				}
				execResult = testkube.ExecutionResult{
					Status: testkube.StatusPtr(testkube.SUCCESS_ExecutionStatus),
					Output: result,
				}
				repo.UpdateResult(context.TODO(), execution.Id, execResult)
			}()
		}
	}

	return testkube.ExecutionResult{
		Status: testkube.StatusPtr(testkube.PENDING_ExecutionStatus),
		Output: result,
	}, nil
}

func (c *JobClient) GetJobPods(podsClient pods.PodInterface, jobName string, retryNr, retryCount int) (*v1.PodList, error) {
	pods, err := podsClient.List(context.TODO(), metav1.ListOptions{LabelSelector: "job-name=" + jobName})
	if err != nil {
		return nil, err
	}
	if retryNr == retryCount {
		return nil, fmt.Errorf("retry count exceeeded")
	}
	if len(pods.Items) == 0 {
		time.Sleep(time.Duration(retryNr * 50 * int(time.Millisecond))) // increase backoff timeout
		return c.GetJobPods(podsClient, jobName, retryNr+1, retryCount)
	}
	return pods, nil
}

func (c *JobClient) GetPodLogs(podName string, execution testkube.Execution, repo result.Repository, tail bool) (string, error) {
	count := int64(100)
	var toReturn string
	var message string
	podLogOptions := v1.PodLogOptions{
		Follow:    tail,
		TailLines: &count,
	}

	podLogRequest := c.ClientSet.CoreV1().
		Pods(c.Namespace).
		GetLogs(podName, &podLogOptions)
	stream, err := podLogRequest.Stream(context.TODO())
	if err != nil {
		return "", err
	}

	defer stream.Close()

	if tail {
		for {
			buf := make([]byte, 2000)
			numBytes, err := stream.Read(buf)
			if numBytes == 0 {
				break
			}
			if err == io.EOF {
				break
			}
			if err != nil {
				return "", err
			}

			message = string(buf[:numBytes])
			if strings.Contains(message, fmt.Sprintf("$$$%s$$$", execution.Id)) {
				message = ""
				break
			} else {
				toReturn += message
				execution.ExecutionResult.Output = toReturn
				err := repo.UpdateResult(context.Background(), execution.Id, *execution.ExecutionResult)
				if err != nil {
					fmt.Println(err)
					break
				}
			}
		}
	} else {
		buf := new(bytes.Buffer)
		_, err = io.Copy(buf, stream)
		if err != nil {
			return "", err
		}
		toReturn = buf.String()
	}
	return toReturn, nil
}

func (c *JobClient) AbortK8sJob(jobName string) *testkube.ExecutionResult {
	var zero int64 = 0
	bg := metav1.DeletePropagationBackground
	jobs := c.ClientSet.BatchV1().Jobs(c.Namespace)
	err := jobs.Delete(context.TODO(), jobName, metav1.DeleteOptions{
		GracePeriodSeconds: &zero,
		PropagationPolicy:  &bg,
	})
	if err != nil {
		return &testkube.ExecutionResult{
			Status: testkube.StatusPtr(testkube.ERROR__ExecutionStatus),
			Output: err.Error(),
		}
	}
	return &testkube.ExecutionResult{
		Status: testkube.StatusPtr(testkube.SUCCESS_ExecutionStatus),
	}
}

func (c *JobClient) CreatePersistentVolume(name string) error {
	quantity, err := resource.ParseQuantity("10Gi")
	if err != nil {
		return err
	}
	pv := &v1.PersistentVolume{
		ObjectMeta: metav1.ObjectMeta{
			Name:   name,
			Labels: map[string]string{"type": "local"},
		},
		Spec: v1.PersistentVolumeSpec{
			Capacity:    v1.ResourceList{"storage": quantity},
			AccessModes: []v1.PersistentVolumeAccessMode{v1.ReadWriteMany},
			PersistentVolumeSource: v1.PersistentVolumeSource{
				HostPath: &v1.HostPathVolumeSource{
					Path: fmt.Sprintf("/mnt/data/%s", name),
				},
			},
			StorageClassName: "manual",
		},
	}

	if _, err = c.ClientSet.CoreV1().PersistentVolumes().Create(context.TODO(), pv, metav1.CreateOptions{}); err != nil {
		return err
	}

	return nil
}

func (c *JobClient) CreatePersistentVolumeClaim(name string) error {
	storageClassName := "manual"
	quantity, err := resource.ParseQuantity("10Gi")
	if err != nil {
		return err
	}

	pvc := &v1.PersistentVolumeClaim{
		ObjectMeta: metav1.ObjectMeta{
			Name: name,
		},
		Spec: v1.PersistentVolumeClaimSpec{
			StorageClassName: &storageClassName,
			AccessModes:      []v1.PersistentVolumeAccessMode{v1.ReadWriteMany},
			Resources: v1.ResourceRequirements{
				Requests: v1.ResourceList{"storage": quantity},
			},
		},
	}

	if _, err := c.ClientSet.CoreV1().PersistentVolumeClaims(c.Namespace).Create(context.TODO(), pvc, metav1.CreateOptions{}); err != nil {
		return err
	}
	return nil
}
