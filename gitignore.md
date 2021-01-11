# Git Ignore

Gitignore allows you to intentionally specify untracked files to ignore.

A `gitignore` file specifies untracked files that Git should ignore. Files already tracked by Git are not affected.

Remove Tracked Files
--------------------
If you add a pattern or a file to `gitignore` and wish to retrospectively remove tracked files that match the `gitignore` pattern:

```
git rm -r --cached .
git add .
git commit -m "Remove ignored files
```
