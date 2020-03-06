# Merge Changes for a Single File From a Different Branch

If you have changes in `branch-a` that should be included in `branch-b`, but you don't want to merge in all changes:

1. Make sure changes have been committed to `branch-a` and `branch-b`.
2. Checkout `branch-b`.
3. Patch the target file in `branch-b` with the file from `HEAD` in `branch-a`

```bash
# Checkout the right branch
git checkout branch-b

# Patch the file in branch-b with the same file from branch-a, hunk-by-hunk
git checkout --patch branch-a README.md
```

In the example above, both branches should have a common `README.md`. When changes are made to this file in `branch-a`, the same changes should be made in `branch-b`.

If the file in question doesn't exist, omit the `--patch` option. In this case, you just checkout the file from the different branch.

After patching, add the file to the staging area and commit as usual:

```bash
git add README.md
git commit -m "Merge changes to README.md from branch-a"
git push origin branch-b
```


