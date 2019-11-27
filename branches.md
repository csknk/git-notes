---
title: Branches
---

Branches
========
Branches facilitate experimentation - you can work on a feature or bugfix in isolation, merging the work only if and when it is ready. Branches are not aware of other branches.

Branches allow you to support multiple versions of a project.

Branches facilitate team development - you can work individually on an isolated branch before requesting that your changes are merged.

What is a Branch?
-----------------
A branch is a set of commits that trace back to the project's first commit.

```
Feature X          C 
                   ↓
master	A <------- B 

```
Feature X branch contains commits C, B and A. The master branch contains commits B and A.

Creating a new branch is fast and easy - just creates one tiny file (a reference). 

Branches - Summary
------------------
* Fast & easy to create
* Facilitate experimentation
* Facilitate team development
* Support multiple project versions

Topic and Long-Running Branches
-------------------------------
### Topic Branches
Typically involve feature development, a bug fix, hotfix or configuration change. Topic branches are generally short-lived - the feature is developed, then it is merged into a long running (e.g. production branch).

### Long Lived
Live longer than topic branches, maybe even for the lifetime of the project. Examples may include master, develop, release etc.

List Branches
-------------
Use `git branch` to see a list of branches for the current repository. The current branch is marked with an asterisk.

Create a Branch
---------------
Create a branch with the `git branch` command, specifying the new branch name:
```bash
git branch <branch name>
```
This creates a new branch reference, and does not move you to the new branch.

Checkout
--------
Switch to a branch using the `git checkout` command.

```bash
# Switch to the bugfix branch
git checkout bugfix
```

This switches the current commit (the commit that the HEAD reference points to) to the checked out branch label or commit.

If you are on the master branch and check out the bugfix branch, the `HEAD` reference changes from pointing to the master branch label to pointing to the bugfix branch label.

Checkout also updates the working tree with the files from the checked out commit - so the source files in your working tree now reflect the checked out branch.

Create & Checkout in Single Command
-----------------------------------
The `git checkout` command has a `-b` option - this combines `git branch` and `git checkout`:

```bash
git checkout -b newFeature
```
After this command, `HEAD` points to the `newFeature` branch label.

This command is only for new branches and will fail if the branch already exists.

The following examples are sourced from the online [Git Pro Book][1], and illustrate the state of the repo after a new branch called `testing` has been checked out.

### Diagram: HEAD pointing to master Branch
After creating the testing branch, `HEAD` still points to the `master` branch.

![Branch Diagram](./images/head-to-master.png)

At this point, `master` and `testing` point to the same commit.

After checking out and commiting changes to the `testing` branch, the `testing` branch moves forward but the master branch still points to the commit that was `HEAD` when the branch was checked out:

### Diagram: HEAD pointing to topic branch
![Branch Diagram](./images/head-to-branch-with-commits.png)

At this point, if you `git checkout master`, you're back to the pre-branched state. The working tree does not have commit 87ab2. The master branch does not know about the `testing` branch at all.

Detached Heads
--------------
When working on a branch you have checked out the commit that the branch label points to.

It is also possible to directly check out a commit. For example, you might checkout a commit to temporarily view an older version of the project.

Checking out a commit rather than a branch leads to a detached HEAD state. This means that instead of the HEAD reference pointing to a branch label, HEAD points directly to the SHA-1 of a commit. 

A detached HEAD state means that the HEAD reference is detached from a branch label (e.g. `master`) - it points to a hash value instead.

* __Viewing files in a detached head state is OK__: a good way to peek into project history.
* If you need to make changes to a detached HEAD, you should make a branch on that commit first.

Deleting a Branch Label
-----------------------
Deleting a branch usually means that a branch label is deleted.

Deleting a branch label does not normally delete commits - at least not straight away.

If the branch has not had any commits, deleting the branch just involves deleting the branch label.

To delete, use the `-d` option with the `git branch` command:

```bash
git branch -d my-feature-branch
```
After merging a topic branch, it's usually a good idea to delete the topic branch label.

Dangling Commits
----------------
If you delete a branch label that references unmerged work, this is a problem because the unmerged commits will not belong to any branch - git will normally disallow this.

If you are sure that you want to delete such a branch label, along with dangling commits, you can use the `-D` option:

```bash
git branch -D my-expendable-branch
```
The branch label is deleted, and any unmerged commits from that branch will be left dangling.

Git periodically collects garbage - it will look for and delete older dangling commits.

Undo Accidental Branch Delete
-----------------------------
If you mistakenly delete a branch label, leaving dangling commits - `git reflog` helps you to undo this. `git reflog` returns a local list of recent commits.

The list is in the local `.git` directory, but NOT in the repository (only works locally).

* Run `git reflog`, determine the SHA hash of the dangling commit.
* Run `git checkout -b new-feature 45affaa` - creates a new branch label pointing to the (previously) dangling commit.

Summary
-------
* A branch is a set of commits that trace back to the project's first commit.
* Creating a branch creates a branch label.
* Checkout involves updating the HEAD reference and updating the working tree.
* A detached HEAD reference points directly to a commit.
* Fix a detached HEAD by creating a branch.
* Deleting a branch deletes a branch label.
* Dangling commits will eventually be garbage collected. 

References
----------
* [Pro Git Book, Git Branching][1]

[Images source][1], licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/3.0 or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

[1]: https://book.git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell
