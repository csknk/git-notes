# Git Notes
Git can be thought of as a content manager for three __trees__ or three collections of files.

HEAD
----
Last commit snapshot, next parent.

HEAD is the pointer to the current branch reference - which in turn is a pointer to the last commit made on the current branch.

HEAD may be thought of as a snapshot of the __last commit__ on the current branch.

To see the directory listing and SHA-1 checksums for each file in HEAD:

```bash
# Show content or type of HEAD object
git cat-file -p HEAD

# Recursively list the contents of the HEAD tree object
git ls-tree -r HEAD
```

The Index
---------
The index or __staging area__ is the proposed next commit snapshot.

The index consists of all file contents that were last checked out into the working directory, in the state they were in when last checked out.

When files are replaced with new versions, `git commit` converts the index into a tree for a new commit. A new commit is created and the branch that HEAD points to is moved to the new commit.

The index is not technically a tree data structure - it is a flattened manifest - but can be thought of as a tree.

Working Directory
-----------------
The working directory or __working tree__ is a "sandbox" for working on files.

The HEAD and Index store content in the `.git` directory - efficiently, but inconvenient in terms of access.

The working directory unpacks content into actual files, making them easily accessible for normal editing.

Changes can be tried out in the working directory, before being added to the staging area (index) and thereafter committed to history.

Typical Workflow
----------------
* Checkout a project, or start with a new project
* Work on files - in the __working directory__
* __Stage__ files - `git add` files to the __index__
* __Commit__ files - `git commit` the contents of index, updating the master/HEAD pointer
