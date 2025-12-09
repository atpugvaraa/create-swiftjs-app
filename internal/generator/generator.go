package generator

import (
	"embed"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
)

type Scaffolder struct {
	Templates embed.FS
}

// Create now accepts 'templateName' (e.g., "starter" or "barebones")
func (s *Scaffolder) Create(destPath string, templateName string) error {
	// 1. Verify the template exists in the binary
	templateRoot := "templates/" + templateName
	_, err := s.Templates.ReadDir(templateRoot)
	if err != nil {
		return fmt.Errorf("template '%s' not found. Available: starter, barebones", templateName)
	}

	// 2. Create the target directory
	if err := os.MkdirAll(destPath, 0755); err != nil {
		return fmt.Errorf("could not create directory: %w", err)
	}

	// 3. Walk through the SPECIFIC template folder
	return fs.WalkDir(s.Templates, templateRoot, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}

		// Calculate relative path by stripping the template root
		// e.g. "templates/starter/src/App.tsx" -> "src/App.tsx"
		relPath, err := filepath.Rel(templateRoot, path)
		if err != nil {
			return err
		}

		if relPath == "." {
			return nil
		}

		// Determine target path on user's disk
		target := filepath.Join(destPath, relPath)

		if d.IsDir() {
			return os.MkdirAll(target, 0755)
		}

		// Read and Write
		content, err := s.Templates.ReadFile(path)
		if err != nil {
			return fmt.Errorf("failed to read embedded file: %w", err)
		}

		fmt.Printf("   📄 Creating %s...\n", relPath)
		return os.WriteFile(target, content, 0644)
	})
}
