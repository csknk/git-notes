# Sync Forked Repo with Upstream

Configure Remote
----------------
Check current remotes:

```bash
git remote
```
This will probably output `origin`, denoting that your repo has a single remote. 

Configure a Git remote for the upstream (original) repo:

```bash
git remote add upstream https://github.com/original-project/original-project.git
```

Check:

```bash
git remote

# Output:
origin
upstream
```

Sync Local Fork with Upstream
-----------------------------
There are now three repositories:

* local 
* origin (GitHub, Bitbucket etc)
* upstream (The original repo)

Sync from upstream to local, then push changes to origin:

```bash
# fetch changes
git fetch upstream

# switch to master branch
git checkout master

# Merge changes from upstream into master
git merge upstream/master

# Push local changes to origin
git push
```
