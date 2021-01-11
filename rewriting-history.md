# Rewriting History

Amending a Commit Message Only
------------------------------
To change the most recent commit:

* Change commit message
* Change project files

This creates a new hash - therefore rewrites history.

```bash
git commit --amend -m "New correct message."
```
The commit message is now fixed. Files are unaltered, but the SHA-1 hash of the commit is now different.

Change Files in the Commit
--------------------------
* Modify staging area and amend a commit.
* Optionally use the `--no-edit` option to reuse previous commit message

```bash
git add amended-file.txt

git commit --amend --no-edit
```
This changes the commit to include the updated file, and leaves the commit message unaltered.

Interactive Rebase: Squash Commit
---------------------------------
Allows the history of a branch to be re-written.

* Applies a newer (squashed) commit to an older commit
* Combines commit messages
* Removes the newer commit

Useful as a way of cleaning up lots of minor commits that are not meaningful as standalone changes to a project.

```bash
git log --all --decorate --oneline --graph

# Rebase from a starting commit
git rebase -i d695
```

An interctive session opens:

```bash
pick 3304da0 add fileB.txt
pick d6f8c15 Add feature 2
pick 25987d3 add feature 1

# Rebase fcb464d..25987d3 onto fcb464d (3 command(s))
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

Amend "pick" to "s" to denote "squash" for commits d6f8c15, 25987d3. This will combine the work of these commits.

```bash
# This is a combination of 3 commits.
# The first commit's message is:
add fileB.txt

# This is the 2nd commit message:

Add feature 2

# This is the 3rd commit message:

add feature 1 wip

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Wed Nov 27 20:36:27 2019 +0000
#
# interactive rebase in progress; onto fcb464d
# Last commands done (3 commands done):
#    s d6f8c15 Add feature 2
#    s 25987d3 add feature 1 wip
# No commands remaining.
# You are currently editing a commit while rebasing branch 'feature1' on 'fcb464d'.
#
# Changes to be committed:
#	modified:   fileA.txt
#	new file:   fileB.txt
#
```
Amend messages, save and exit. 

```bash

```

Squash
------
Reduces multiple commits into a single commit.

