package filesystem

import (
	"bufio"
	"os"
	"path/filepath"
)

//go:generate mockgen -destination=./mock_filesystem.go -package=filesystem "github.com/kubeshop/testkube/internal/common/filesystem" FileSystem
type FileSystem interface {
	Stat(name string) (os.FileInfo, error)
	Walk(root string, walkFn filepath.WalkFunc) error
	OpenFile(name string, flag int, perm os.FileMode) (*os.File, error)
	OpenFileRO(name string) (*os.File, error)
	OpenFileBuffered(name string) (*bufio.Reader, error)
}
