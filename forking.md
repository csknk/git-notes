# Forking a Repository
A fork is a remote copy of an upstream remote repository.

Allows for contributions to the upstream project (the original) or serves as a starting point for a new project.

Syncing with the Upstream Repository
------------------------------------
Forks and upstream repositories will probably become out of sync. You will probably need to sychronise the fork with the original upstream project.

Add the repository from which the project was forked and name it (by convention) `upstream`:

```bash
git remote add upstream https://github.com/bitcoin/bitcoin.git

# Confirm by running git remote
git remote

# Output:
origin
upstream
```

To sync the local repository with the upstream master:

```bash
git checkout master

git fetch upstream

git merge upstream/master
```

Pull Requests
-------------
Pull requests (PRs) can be made from forks and merged into the upstream repository.

* Create a branch on the fork
* Make changes
* In the online Git service, create a pull request for this branch.

