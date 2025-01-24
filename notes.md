# Learn Git

## Environment Structure:

1. Working directory
2. Staging Area
3. Local Repo [Current Device]
4. Remote Repo [Github, Gitlab]

## How to Add to Staging Area:

1. For Certain File: `git add <filename>`
1. For All Files: `git add .`

## How to Remove from Staging Area:

1. For Certain File: `git restore --staged <filename>`
1. For All Files: `git restore --staged .`
1. `git reset head <filename>`

## How to know all Branches

1. `git branch `
1. `git remote -v`

## How to Push to Remote Repo

1. `git push <RemoteName> <BranchName>` For Example ``git push origin <https://github.com/learner109/learn-git.git> main`
