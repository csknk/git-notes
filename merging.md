---
title: Merging
---
Merging
=======
Merging is the act of combining two independent branches - usually a topic branch and a long-running branch.

The branch being merged into is known as the __base branch__.

The work of two branches is combined into a single commit, known as a __merge commit__.

After merging into master, the work that was done on the other branch is now part of the master branch.

Switching Branches
------------------
When you switch branches, Git resets the working directory to look like it did the last time you committed on that branch.

Git adds, removes, and modifies files to make sure your working copy reflects the state of the branch at the last commit to it.

Merge Types
-----------
1. Fast forward
2. Merge commit
3. Squash merge
4. Rebase

Fast Forward Merge
------------------
Moves the base branch label to the tip of the topic branch.

After a fast forward merge, both branches contain exactly the same commits.

Only the master branch label has moved.

__A fast forward merge is only allowed if no other commits have been made to the base branch since branching.__

### Steps: Fast Forward Merge
```bash
git checkout master
git merge featureX
# Attempting a fast forward merge is the default behaviour

# All commits merged, so branch can be deleted without dangling commits:
git branch -d featureX
```
Deleting the branch label is optional - consider tagging the feature merge commit, or noting in the commit message.

Merge Commits
-------------
Combines the commits at the tips of the merged branches, placing the result in the merge commit.

A merge commit always has multiple parents.

If both branches change the same thing in different ways, a __merge conflict__ results.

### Performing a Merge Commit
If a fast forward commit is not possible, Git attempts a merge commit.

```bash
git checkout master
git merge featureX
# Accept or modify the merge message

# Optionally:
git branch -d featureX
```
Merge Commit With No Fast Forward
---------------------------------
Even if a fast forward commit is possible, a merge commit may be forced. This can be done so that branches and merges can be seen in the commit graph.

```bash
git checkout master
git merge --no-ff featureX
git branch -d featureX
```

Team Policies
-------------
May:

* Require a linear history.
* Require merge commits.
* Leave it up to the merger.

Summary
-------
* Merging combines the work of multiple branches.
* A fast-forward merge moves the base branch label to the tip of the topic branch.
* A merge is fast-forwardable if no other commits have been made to the base branch since the branch was created.
* A merge commit is the result of combining the work of multiple commits.
* A merge commit has multiple parents.

