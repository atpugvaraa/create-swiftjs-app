package main

import (
	"bufio"
	"embed"
	"flag"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/atpugvaraa/create-swiftjs-app/internal/generator"
)

//go:embed templates/*
var templateFS embed.FS

func main() {
	if len(os.Args) < 2 {
		printUsage()
		os.Exit(1)
	}

	switch os.Args[1] {
	case "new":
		handleNewCommand()
	default:
		fmt.Printf("Unknown command: %s\n", os.Args[1])
		printUsage()
		os.Exit(1)
	}
}

func handleNewCommand() {
	// 1. Define the "new" command flags
	newCmd := flag.NewFlagSet("new", flag.ExitOnError)

	// Bind both -t and --template to the same variable
	var templateName string
	const defaultTemplate = "starter"
	const usage = "The template to use (starter, barebones)"

	newCmd.StringVar(&templateName, "template", defaultTemplate, usage)
	newCmd.StringVar(&templateName, "t", defaultTemplate, usage+" (shorthand)")

	// 2. Parse arguments (skipping 'program' and 'new')
	// User input: ./tool new -t barebones my-app
	err := newCmd.Parse(os.Args[2:])
	if err != nil {
		return
	}

	// 3. Get positional args (the project name/path) remaining after flags
	args := newCmd.Args()
	var targetPath string

	if len(args) > 0 {
		// Case: Name provided via CLI
		targetPath = args[0]
	} else {
		// Case: Interactive Mode
		fmt.Print("Enter project name: ")
		reader := bufio.NewReader(os.Stdin)
		input, _ := reader.ReadString('\n')
		targetPath = strings.TrimSpace(input)
	}

	if targetPath == "" {
		fmt.Println("❌ Error: Project name cannot be empty.")
		os.Exit(1)
	}

	// 4. Resolve Path & Validation
	absPath, err := filepath.Abs(targetPath)
	if err != nil {
		fmt.Printf("❌ Error resolving path: %v\n", err)
		os.Exit(1)
	}
	projectName := filepath.Base(absPath)

	if _, err := os.Stat(absPath); !os.IsNotExist(err) {
		fmt.Printf("❌ Error: Directory '%s' already exists.\n", projectName)
		os.Exit(1)
	}

	// 5. Execute Generator
	fmt.Printf("🚀 Creating SwiftJS app '%s' using '%s' template...\n", projectName, templateName)

	scaffolder := generator.Scaffolder{Templates: templateFS}

	err = scaffolder.Create(absPath, templateName)
	if err != nil {
		fmt.Printf("❌ Failed to create project: %v\n", err)
		os.Exit(1)
	}

	fmt.Println("\n✅ Success!")
	fmt.Printf("👉 cd %s && bun install\n", targetPath)
}

func printUsage() {
	fmt.Println("Usage:")
	fmt.Println("  create-swiftjs-app new [name] [-t template]")
	fmt.Println("\nFlags:")
	fmt.Println("  -t, --template  Select template (default: starter)")
}
