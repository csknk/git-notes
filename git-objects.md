# Git IDs
* Git object names are also known as Git IDs
* Git objects are named with SHA-1 hashes
* SHA-1 values for a given piece of content are statistically unique
* Git IDs are often shortened to the first four or more characters

Git References
--------------
Commits can be associated with references. A reference is a user-friendly name that points to:

* A commit SHA-1 hash
* Another reference - known as a symbolic reference

Using References with Git Commands
----------------------------------
Use references instead of hashes.

Branch Labels
-------------
Master is the default name of the main branch in the repository.

Run `git status` to determine the branch you're currently working on.

```bash
git status
# output:
On branch master
nothing to commit, working directory clean
```
A branch label points to the most recent commit in a branch - the "tip" of the branch.

This is implemented as a reference.

All commits belong to the branch, but the __branch label__ points to the tip of the branch.

Branches are easy to implement and use very few resources.

References are stored in `.git/refs/heads`. Working here directly is not recommended.

References are implemented as simple text files - for example: `.git/refs/heads/master` contains the string `068256e46896283575d5fdc73fcb0030b5e277a6` which is a SHA-1 hash of the commit object at the tip of the branch.
Note that the file is tiny - 41 bytes.

This is how git makes the association between the master branch label and the SHA-1 hash of the tip of the branch.

Running `git log`:

```bash
commit 068256e46896283575d5fdc73fcb0030b5e277a6
Author: David Egan <david@carawebs.com>
Date:   Tue Oct 1 20:31:11 2019 +0100

    Add content.

...
```
Note that the `master` reference and the most recent commit have the same hash.

HEAD
----
`HEAD` is a reference to the current commit. Usually points to the branch label of the current branch.

Because it only points to the current commit, and there can only be one current commit, there is only one `HEAD` reference in a given local repository.

```bash
git show-ref --head
068256e46896283575d5fdc73fcb0030b5e277a6 HEAD
068256e46896283575d5fdc73fcb0030b5e277a6 refs/heads/master
068256e46896283575d5fdc73fcb0030b5e277a6 refs/remotes/origin/master
```
Note that there is a reference to `HEAD` in the root `.git` directory.

```bash
git log --oneline -1
068256e (HEAD -> master, origin/master) Add content.
```
Shows that in this case there are three associated references to `HEAD`: `HEAD` points to the master branch label, the origin/master remote reference and the current commit hash.

`HEAD -> master` means that the `HEAD` reference (a reference to the current commit, within the working tree)  points to the `master` branch label, which in turn points to the hash of the relevant commit.

`HEAD` in Git is implemented as a reference.

There is a single top-level reference file, `.git/HEAD` which points to the current commit.

```bash
cat HEAD 
# Output:
ref: refs/heads/master
```

This is a symbolic reference - it points to another reference.

Referencing Prior Commits with ~ and ^
--------------------------------------
### Appending the `~` Tilde

Appending the tilde to Git IDs and references to refer to prior commits:

* `~` or `~1` refers to the parent commit
* `~2` or `~~` refers to the parent's parent
* `~3` or `~~~` refers to the commit three commits away from the current commit

```bash
# Show the parent of the HEAD:
git show HEAD~
git show HEAD~1 # same as above
git show master~1 # same as above

# Show the parent's parent:
git show HEAD~~
git show HEAD~2 # same as above
```

You can also use a partial hash to reference the current commit.

### Appending a caret `^` to Git IDs

Refers to a parent in a merge commit.

Tags
----
A tag is a reference/label attached to a specific commit.

This allows you to assign a friendly label to a commit - e.g. `version-1.0.0`.

Use a tag name where you would normally use a commit reference.

### Lightweight tag
These are a simple reference to a commit.

### Annotated tag
These are a unique Git object:
* Full Git object that references a commit
* Includes metadata: tag author info, date, message, commit ID
* Can be GPG signed

In general, annotated tags are recommended over lightweight tags - they are true Git objects, with more capabilities.

To view all tags in the repository, use `git tag` command.

Tags can be used instead of branch labels or Git IDs in Git commands.

Tagging
-------

### Lightweight Tag
To tag a commit with a lightweight tag:

```bash
git tag <tag name> [<commit>]
```
You can optionally specify the commit as an option - `HEAD` being the default commit that will be tagged.

### Annotated Tag
To tag a commit with an annotated tag, specify the `-a` option, which creates a Git object:

```bash
git tag -a [-m <msg> | -F <file>] <tag name> [<commit>]

# Example:
git tag -a -m "Early work" firstDraft 5c4fb27
```
The message can either be entered as part of the command (`-m` option), specified as a file (`-F` option) or left blank, in which case a file editor will open and allow you to enter the message (like a Git commit).

`git show <tag name>` now shows metadata relating to the tag before the associated commit information.

### Transfer Tags to Remote Repository
`git push` does not automatically transfer tag data to the remote repo.

```bash
# Transfer a single tag:
git push <remote> <tag name>

# Example:
git push origin v1.0

# Transfer all tags from local to remote:
git push <remote> --tags

# Example:
git push origin --tags
```
Deleting Tags
-------------
Use the `-d` option:

```bash
git tag-d v1.0
```

TLDR
----
* A branch label is a reference that points to the tip of a branch
* `HEAD` is a reference that points to the current commit
* Use `~` and `^` to conveniently refer to previous commits
* Label specific commits with readable tags

References
----------
* [Git tags][1]
* [Difference between ~ and ^ in Git][2]

[1]: https://git-scm.com/docs/git-tag
[2]: https://stackoverflow.com/questions/2221658/whats-the-difference-between-head-and-head-in-git
