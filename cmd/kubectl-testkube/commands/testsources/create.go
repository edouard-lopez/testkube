package testsources

import (
	"fmt"
	"strconv"

	"github.com/spf13/cobra"

	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands/common"
	apiv1 "github.com/kubeshop/testkube/pkg/api/v1/client"
	"github.com/kubeshop/testkube/pkg/crd"
	"github.com/kubeshop/testkube/pkg/ui"
)

func NewCreateTestSourceCmd() *cobra.Command {
	var (
		name, uri            string
		sourceType           string
		file                 string
		gitUri               string
		gitBranch            string
		gitCommit            string
		gitPath              string
		gitUsername          string
		gitToken             string
		gitWorkingDir        string
		labels               map[string]string
		gitUsernameSecret    map[string]string
		gitTokenSecret       map[string]string
		gitCertificateSecret string
		gitAuthType          string
	)

	cmd := &cobra.Command{
		Use:     "testsource",
		Aliases: []string{"testsources", "tsc"},
		Short:   "Create new TestSource",
		Long:    `Create new TestSource Custom Resource`,
		Run: func(cmd *cobra.Command, args []string) {
			crdOnly, err := strconv.ParseBool(cmd.Flag("crd-only").Value.String())
			ui.ExitOnError("parsing flag value", err)

			if name == "" {
				ui.Failf("pass valid name (in '--name' flag)")
			}

			namespace := cmd.Flag("namespace").Value.String()
			var client apiv1.Client
			if !crdOnly {
				client, namespace, err = common.GetClient(cmd)
				ui.ExitOnError("getting client", err)

				testsource, _ := client.GetTestSource(name)
				if name == testsource.Name {
					ui.Failf("TestSource with name '%s' already exists in namespace %s", name, namespace)
				}
			}

			err = common.ValidateUpsertOptions(cmd, "")
			ui.ExitOnError("validating passed flags", err)

			options, err := NewUpsertTestSourceOptionsFromFlags(cmd)
			ui.ExitOnError("getting test source options", err)

			if !crdOnly {
				_, err := client.CreateTestSource(options)
				ui.ExitOnError("creating test source "+name+" in namespace "+namespace, err)

				ui.Success("TestSource created", name)
			} else {
				if options.Data != "" {
					options.Data = fmt.Sprintf("%q", options.Data)
				}

				data, err := crd.ExecuteTemplate(crd.TemplateTestSource, options)
				ui.ExitOnError("executing crd template", err)

				ui.Info(data)
			}
		},
	}

	cmd.Flags().StringVarP(&name, "name", "n", "", "unique test source name - mandatory")
	cmd.Flags().StringToStringVarP(&labels, "label", "l", nil, "label key value pair: --label key1=value1")
	cmd.Flags().StringVarP(&sourceType, "source-type", "", "", "source type of test one of string|file-uri|git")
	cmd.Flags().StringVarP(&file, "file", "f", "", "source file - will be read from stdin if not specified")
	cmd.Flags().StringVarP(&uri, "uri", "u", "", "URI which should be called when given event occurs")
	cmd.Flags().StringVarP(&gitUri, "git-uri", "", "", "Git repository uri")
	cmd.Flags().StringVarP(&gitBranch, "git-branch", "", "", "if uri is git repository we can set additional branch parameter")
	cmd.Flags().StringVarP(&gitCommit, "git-commit", "", "", "if uri is git repository we can use commit id (sha) parameter")
	cmd.Flags().StringVarP(&gitPath, "git-path", "", "", "if repository is big we need to define additional path to directory/file to checkout partially")
	cmd.Flags().StringVarP(&gitUsername, "git-username", "", "", "if git repository is private we can use username as an auth parameter")
	cmd.Flags().StringVarP(&gitToken, "git-token", "", "", "if git repository is private we can use token as an auth parameter")
	cmd.Flags().StringToStringVarP(&gitUsernameSecret, "git-username-secret", "", map[string]string{}, "git username secret in a form of secret_name1=secret_key1 for private repository")
	cmd.Flags().StringToStringVarP(&gitTokenSecret, "git-token-secret", "", map[string]string{}, "git token secret in a form of secret_name1=secret_key1 for private repository")
	cmd.Flags().StringVarP(&gitCertificateSecret, "git-certificate-secret", "", "", "if git repository is private we can use certificate as an auth parameter stored in a kubernetes secret name")
	cmd.Flags().StringVarP(&gitWorkingDir, "git-working-dir", "", "", "if repository contains multiple directories with tests (like monorepo) and one starting directory we can set working directory parameter")
	cmd.Flags().StringVarP(&gitAuthType, "git-auth-type", "", "basic", "auth type for git requests one of basic|header")

	return cmd
}
