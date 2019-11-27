---
title: Git Locations
---
Git Locations
=============

Working Tree/Working Directory
------------------------------
The directories and files from a single commit. From `git help glossary`:

> The tree of actual checked out files. The working tree normally contains the contents of the HEAD commit’s tree, plus any local changes that you have made but not yet committed.

The working tree contains files that you edit, and is where you add new files or delete existing files.

Changes to the working tree are noted by the index, showing up as modified files.

Staging Area/Index
------------------
Contains a list of files that are planned to be included in the next commit.

The `git add` command is used to add new or modified files to the staging area.

Local Repository
----------------
Contains all the commits of the project, representing the version history of the project.

The `git commit` command adds staged changes to the local repository.

Project Directory
-----------------
Usually a single directory on the local computer that contains the working tree, staging area and local repository.

The Project Directory contains the working tree.

The working tree contains the directories & files of a single commit of the project.

The Project Directory also contains the hidden directory `.git`. This directory contains the staging area and local repository. 

If you delete the project directory, you also delete the local repository and staging area, since these are in the `.git` subdirectory.

Remote Repository
-----------------
Located in a remote machine. Contains commits of the project, often considered the state of truth of the project.

When the local and remote repositories are synchronized, they contain the exact same commits.

Because nobody works with the repository locally, remote repositories are typically "bare": there is no working tree or staging area. The root directory of the (bare) remote repository is similar to the `.git` directory in a local repository.

By convention, remote repository names end with `.git`.

The State of Files
------------------
Files can be in one of three states:

* Modified: the file has changed but has not yet been committed to the database.
* Staged: a modified file has been marked in it's current version to go into the next commit snapshot.
* Committed: the data is stored in the local database.

Local Operations
----------------
![Local Operations](./images/18333fig0106-tn.png)

Image from [https://git-scm.com/book/en/v1/Getting-Started-Git-Basics](https://git-scm.com/book/en/v1/Getting-Started-Git-Basics)
