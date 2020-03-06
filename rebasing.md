# Rebasing
Rebasing, like merging, is a way of integrating changes from one branch to another.

Rebasing moves or combines a sequence of commits to a new base commit. This maintains a linear project history - making it appear as though the branch was created from a different commit (base).

Rebase rewrites history, whereas merging is a forward moving change record.

* Rebasing moves a branch to the tip of another branch
* Rebasing is a form of merge and may result in merge conflicts

If `<branch>` is specified, git rebase will perform an automatic `git checkout <branch>` before doing anything else. Otherwise it remains on the current branch.

If `<upstream>` is not specified, the upstream configured in `branch.<name>.remote` and `branch.<name>.merge` options will be used (see `git-config --help`) and the `--fork-point` option is assumed. If you are currently not on any branch or if the current branch does not have a configured upstream, the rebase will abort.
