# Resolving Merge Conflicts
If you perform a merge with a merge commit, Git needs to combine the work of multiple branches and place the result in a single commit.

If multiple branches make different changes to the same part of a file (hunk), a __merge conflict__ results.

When this happens, it must be manually resolved.

Conflict Dividers
-----------------
When a merge conflict occurs, Git adds lines to the differing section of the file that pinpoints the conflict.

```
<<<<<<< HEAD
original content
=======
conflicting content
>>>>>>> new-branch
```

These `<<<<<<<`, `=======` and `>>>>>>>` lines are added by Git as "conflict dividers". The `=======` line is the centre of the conflict.

All the content between the centre and the `<<<<<<< HEAD` line is content that exists in the current branch master which the `HEAD` ref is pointing to.

All content between the centre and `>>>>>>> new-branch` is content that is present in the merging branch.

Manual Change and Add
---------------------
* Edit the conflicting file
* Stage the edited content
* Finalise the merge by creating a new commit.

```bash
git add conflicting-file
git commit -m "merge and resolve conflict"
```
Useful Commands
---------------
* `git status`: identify conflicting files
* `git log --merge`: produces a list of commits that conflict between merging branches
* `git diff`: finds differences between states of repositories/files - predict & prevent merge conflicts
* `git merge --abort`: exits from the merge process, returns branch to starting state
* `git reset`: during merge conflict, resets conflicted files to a known good state

TLDR;
-----
* Merge conflicts occur when two branches modify the same hunk.
* When a conflict occurs:
	- Git will create files in the working tree containing conflict markers.
	- Fix, add and commit the conflicted files.


