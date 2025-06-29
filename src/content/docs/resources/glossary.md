---
title: Glossary
description: This glossary contains definitions of common Git and GitHub terms.
---

Here is a list of terms used in the workshops and this reference guide.

---

## Branches

A branch in Git is like a separate workspace or copy of your project where you can try out changes without affecting the main version. The main branch (often called `main` or `master`) is usually the stable version of the project that's deployed to production or shared with users. Other branches are used to develop new features or fixes, which can later be merged into the `main` branch once they're ready.

There are many different branch strategies and naming conventions. But ultimately it depends on what your team decides.

---

## Command Line

The command line is a text-based interface that allows users to interact with the operating system by typing commands, which are executed by a command-line interpreter (also known as a shell). You'll typically access the command line through a program called a terminal

If you are using a macOS, you can access the [Terminal application](https://support.apple.com/guide/terminal/get-started-pht23b129fed/2.14/mac/15.0) that already comes installed on your device. Another popular option would be [iTerm2](https://iterm2.com/)

If you are using Windows, you can use Command Prompt or [PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell?view=powershell-7.5).

---

## Commit

A commit is a snapshot of your project at a certain point in time. To commit your changes, you can use the `git commit` command like this:

```bash
git commit
```

That will open an editor like Vim, Nano or something else. The editor that opens up will depend on your Git config.

With the editor, you will be able to add longer commit messages with more detail. A commit message is a description of the changes you have made for this commit.

If you just want to leave a short message, then you can use the `-m` flag like this:

```bash
git commit -m "docs: adding readme file"
```

---

## Git

Git is the most popular [disturbed version control system](https://en.wikipedia.org/wiki/Distributed_version_control) used to track changes for files and folders in a given project.

---

## `git init` Command

This is the command you run to initialize an empty Git repository.

```bash
git init
```

---

## `git log` Command

To view all of your commits for your project, you can use the `git log` command like this:

```bash
git log
```

That command will show you each commit starting with the most recent one. Each commit will have a commit hash, date, author and message. A commit hash is a unique identifier for the commit.

To view a more condensed output, you can use the `git log --oneline` command like this:

```bash
git log --oneline

# Example result
418a60b (HEAD -> main) docs: adding readme file
```

---

## `git status` Command

This is the command you use to see the current state of your Git repository.

```bash
git status
```

---

## `ls` Command

This is used to list your files and folders. To list all files and folders, including the hidden ones, you can use the `-a` flag list this:

```bash
ls -a
```

---

## Markdown

[Markdown](https://www.markdownguide.org/) is a markup language commonly used to format text files for documentation on websites.

---

## `mkdir` Command

This is used to create a new directory.

```bash
mkdir example-project
```

---

## `README.md` file

A `README.md` file is is a [markdown](https://www.markdownguide.org/) file that contains important information about your project. This will include project features, how to set it up and run it locally and how to contribute to the project if it is open source.

---

## Repository(Repo)

A repository is a storage location (like a folder or project) where Git tracks all the changes made to files over time.

---

## `touch` Command

This is used to create new files inside of a folder.

```bash
touch README.md
```
