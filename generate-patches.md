# Generate Patches from Git Commits

Create a Patch File for each Commit
-----------------------------------

Patch file for a single commit:
```bash
git format-patch -1 HEAD
```

Separate patch file for each commit from the start to HEAD:

```bash
git format-patch --root HEAD

# Output filenames:
0001-First-commit.patch
0002-Add-attribution.patch
...
```

Resources
---------
[Article on git format-patch][1]
[git format-patch][2], online Git manual


[1]: https://nithinbekal.com/posts/git-patch/
[2]: https://git-scm.com/docs/git-format-patch/1.7.5


