---
title: Remove Files Added to .gitignore
---

If a file that is tracked by git is later added to a `.gitignore`, you may wish to remove the file from the repository altogether.

```bash
# Remove everything from the index (the files will stay in the file system) 
$ git rm -r --cached .

# Re-add everything (they'll be added in the current state, changes included)
$ git add .

# Commit, if anything changed. You should see only deletions
$ git commit -m 'Remove all files that are in the .gitignore'

# Update the remote
$ git push origin master
```

References
----------
* [Remove files from repo][1]

[1]: https://riptutorial.com/git/example/16165/clear-already-committed-files--but-included-in--gitignore
