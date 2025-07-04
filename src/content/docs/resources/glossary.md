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

## Fork

A fork is your personal copy of another repository.

---

## Git

Git is the most popular [disturbed version control system](https://en.wikipedia.org/wiki/Distributed_version_control) used to track changes for files and folders in a given project.

---

## GitHub

This is a platform used to create and manage your repositories. There are millions of users and repositories on GitHub.

Open source projects will have GitHub repositories as well as solo developers and private companies.

GitHub utilizes Git and has many features like bug tracking, project boards, and more.

---

## `git checkout` Command

This can be used to switch to a branch or restore files. To create and checkout a new branch all at once, you can use the `git checkout -b <new-branch-name>` command.

---

## `git clone` Command

This command is used to create a local copy of an existing remote repository.

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

## `git merge` Command

This command is used to join two or more development histories together. Here is an example of merging a branch into the `main` branch:

```bash
git merge fix-login-error-message
```

---

## `git push`

This command is used to push changes from a local repository to a remote repository.

---

## `git remote add` Command

If you want to have others see your project and collaborate with you, then you will need to connect it to a shared version on GitHub.

This is where the `git remote add` command comes in.

A remote is a version of your repository hosted elsewhere. In this case, we have just created a remote repository on GitHub.

`origin` is the default name Git gives to the first remote repository you connect to your local repo.

Here is an example of using the command:

```bash
git remote add origin https://github.com/jdwilkin4/example-github-project.git
```

---

## `git status` Command

This is the command you use to see the current state of your Git repository.

```bash
git status
```

You can also use the short command if your condense the output to just one line.

```bash
git status --short
git status -s
```

---

## `git switch` Command

This is used to switch between branches in Git. You can use the `git switch -c <new-branch-name>` command to create and switch to a new branch.

---

## Issues

An issue is a place to report bugs, suggest feature requests, and other suggestions for the repository. You can find the issues tab on your repository on GitHub.

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

## Pull request

This is a way to suggest changes to a shared remote repository.

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

## Two-factor authentication

2FA, or Two-factor authentication, provides an extra layer of security when you log in
