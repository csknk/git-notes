# Fetch Pull and Push

Network Commands
----------------
* Clone - copies a remote repository
* Fetch - retieves new objects and references from the remote repository.
* Pull - fetches and merges commits locally.
* Push - adds new objects and references to the remote repository.

Fetch
-----
Retrieves new objects and references from another repo.

Tracking branches are updated.

Pull
----
`git-pull` - Fetch from and integrate with another repository or a local branch.

```bash
git pull [options] [<repository> [<refspec>...]]
```

>`<repository>` should be the name of a remote repository as passed to `git-fetch`. `<refspec>` can name an arbitrary remote ref (for example, the name of a tag) or even a collection of refs with corresponding remote-tracking branches (e.g., `refs/heads/*:refs/remotes/origin/*`), but usually it is the name of a branch in the remote repository.
>
>From `git pull --help`

`git pull` combines `git fetch` and `git merge FETCH_HEAD`.

FETCH_HEAD is an alias for the tip of the tracking branch.

First, new objects and references are fetched from the remote branch.

Then, if new objects are added to the tracking branch, the tracking branch is merged into the local branch. The current branch is assumed unless otherwise specified.

The process is similar to merging a topic branch into a base branch.

`git pull` has merging options:

* `--ff`: Fast forward merge if possible, otherwise merge commit
* `--no-ff`: Always perform a merge commit
* `--ff-only`: If a fast-forward merge is not possible, cancel
* `--rebase [--preserve-merges]`

Push
----
Adds commits to the remote repository.


