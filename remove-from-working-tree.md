---
title: Remove File From Working Tree
---
Remove File From Working Tree
=============================

If you want to undo changes to an unstaged file, rolling it back to it's state at the last commit, you can use `checkout`:

```bash
git checkout my-file.c
```

... `my-file.c` is now the same as it was at the most recent commit.

The `git-checkout` command switches branches or restores working tree files.

In this context, `git checkout` updates files in the working tree to match the version in the index or the specified tree.

`git checkout` updates the working tree with files from the checked out commit. This makes it handy for reverting changes. 
