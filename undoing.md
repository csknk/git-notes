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

Unstaging Files
---------------
The _index_ is the __proposed next commit__. This is also known as the __staging area__ - it is what Git uses when `git commit` is run.

The `git add` command updates the index using the current content of the working tree/working directory.

If you erroneously add files, you can undo `git add` before a commit using the `git reset` command:

```bash
# <paths> refers to filepaths 
git reset <paths>
```
Removes `<paths>` from the current index (the list of files to be committed).

Note that `git reset <paths>` is the opposite of `git add <paths>`


```bash
git reset
```
Unstages all changes.

Reset
-----
`git reset` directly manipulates the HEAD, index and working directory trees.

Firstly, `git reset` moves what HEAD points to. It does not change HEAD directly, it moves the branch that HEAD points to.

When used in the form `git reset --soft | --mixed | --hard | --merge | --keep <commit>`, `git reset` sets the current branch head (HEAD) to `<commit>`, optionally modifying the index and working tree to match.

### Undo Commits, Don't Change Index or Working Directory
The `git reset --soft <commit>` command moves what HEAD points to, and stops. The index and working directory are unaffected.

`git reset --soft` changes the commit that you want to have as parent for the changes in the index and working directory.

Example: Reverse last commit to local repo. If HEAD currently points to the master branch, the command makes master point to the parent of HEAD.

```bash
git reset --soft HEAD~1
# same as:
git reset --soft Head~
```
The example above accomplishes the same thing as `git commit --amend`

Example: Simple way of combining commits: `reset --soft` to the appropriate commit.

```bash
git add .; git commit -m  "First commit"
git add .; git commit -m  "Second commit"
git add .; git commit -m  "Third commit"
git add .; git commit -m  "Fourth commit"

git log --oneline
0f0a93a (HEAD -> master) Fourth commit
d6951a5 Third commit
a201af1 Second commit
046e09c First commit

git reset --soft HEAD~3
git log --oneline
046e09c First commit
# At this point, working tree & index are unchanged.
# A new commit will combine changes from commits a201af1, d6951a5 and 0f0a93a
```
Note that a `--soft` reset is not always appropriate. All changes are preserved in the index and working tree - your files won't change at all, and `git status` will show all changes as "to be committed".

### Undo Commit, Update Index
If you need to undo the last commit, and unstage all changes - in other words, you need to rollback to:

* Before running `git add` and
* Before running  `git commit`

Use `git reset --mixed`.

Note that `git reset --mixed` is the default option for `git reset`.

This command moves what the HEAD points to. It then updates the index with the contents of the snapshot that HEAD now points to.

Example: Undo commit, amend index
```bash
git reset --mixed HEAD~

# Equivalent:
git reset HEAD~
```
This command undoes the previous commit and also unstages everything. You can choose what should be added to the index from this point.

### Undo Commit, Update Index, Working Tree Matches Index
The `git reset --hard HEAD~` option undoes the last commit.

The `git add` and `git commit` commands are rolled back, and the working directory is changed to reflect the snapshot option for `git reset`.

__Be careful with `git reset --hard` - data is destroyed__ when files are forcibly overwritten in the working directory. 

Summary of Reset --soft, --mixed and --hard
-------------------------------------------
1. `git reset --soft`: move branch HEAD points to
2. `git reset --mixed` or `git reset`: Do step 1, then set index from HEAD
3. `git reset --hard`: Do steps 1 & 2, then set working tree to the index

Reset with a Path
-----------------
If you provide `reset` with a path, it skips step 1 and acts on the specified file or files.

For example:

```bash
git reset file.c
# Equivalent to:
git reset --mixed HEAD file.c
```
This command makes the index look like HEAD - has the effect of undoing `git add file.c`.

You can specify a specific commit to pull a version of the file from:

```bash
git reset 0f0a93a file.c
# file.c in index is from commit 0f0a93a
# file.c in working tree is unchanged
```

References
----------
* [The Git book: Undoing][1]
* [The Git book: Reset Demystified][2]

[1]: https://book.git-scm.com/book/en/v2/Git-Basics-Undoing-Things
[2]: https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified
