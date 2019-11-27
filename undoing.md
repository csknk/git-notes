# Undoing Things

Undo a Commit
-------------
if you commit too early - need to add files, or change the commit message.

To redo the last commit, use the `--amend` option:

```bash
git commit --amend
```
This uses the staging area for the commit. If no changes have been made, then the snapshot will be identical. The only change will be the commit message - note that when the commit-message editor opens, it will display the previous commit message - which can be amended or edited. It will overwrite the previous message.


If you need to add an additional file(s):
```bash
git commit -m 'initial commit' # incomplete - a mistake
git add forgotten_file
git commit --amend
```
This results in a single commit, with the second commit replacing the first.

Note that the new commit __replaces__ the old - which will not be present in the repository history.

Unstaging a Staged File
-----------------------


Undo an Add
-----------
Undo `git add` before a commit:

```bash
git reset <file>
```
Removes <file> from current index (the list of files to be committed).

```bash
git reset
```
Unstages all changes.

References
----------
* [The Git book: Undoing][1]

[1]: https://book.git-scm.com/book/en/v2/Git-Basics-Undoing-Things
