# Git Productivity Hacks

View Commit Graph from Log
--------------------------
"Log a Dog!"
```bash
git log --all --decorate --oneline --graph

# Add as a git alias
git config --global alias.logadog "log --all --decorate --oneline --graph"

# Now you can just type:
git logadog
``` 

View Diffs in Log
-----------------
Use the `-p` option to produce a patch file. This shows lines that have changed in a commit.

You can combine this with the `-n` option to limit the number of commits that are output from `git log`:

```bash
# Show changes in the last commit
git log -p -n 1
```
The `-p` option outputs a patch file to stdout. This is preceded with a `git diff` header.

Search in Commit
----------------
Use `git show` to look at a particular commit. Use `less` functionality to search the output (`less` is the deault pager used by Git).

```bash
git show 132f8f8

# Search regex in less for changed markdown files:
/*.md
```
You can advance through search results by pressing `n`.

To go to previous results: `shift + n`

To search from the bottom of the file, start the search with `?` rather than `/`.

Name of Files Affected by a Commit
----------------------------------
For filenames only:

```bash
git log 132f8f8 --name-only > manifest
```

With status as of this commit:

```bash
git log d6951a --name-status > manifest
```

