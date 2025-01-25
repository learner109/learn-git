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

# Branching

## How to know all Branches

1. `git branch `
1. `git remote -v`

## Delete Branch

1. `git branch -d <BranchName>`

   - `-d` for safe remove by checking if merge had happened
   - `-D` to delete by force without checking of merge had happened

2. Remove branch from Remote `git push origin <BranchName> --delete`

## How to Push to Remote Repo

1. `git push <RemoteRepoName> <BranchName>` For Example ``git push origin <https://github.com/learner109/learn-git.git> main`

## How to Pull From Remote Repo

1. `git pull <RemoteRepoName>` For Example `git pull origin <https://github.com/learner109/learn-git.git>`

# Git Configurations

### Edit Git Configuration

1. `git config --global --edit`
2. `git config --global <"property"> <"value">`

3. Get git config `git config --list`
4. set git config property `git config user.name "<value>"`

# Github Authencation [Login Methods]

1. Normal email/password
2. SSH [Secure Shell Protocol] this method uses (passphrase) it allows you to login without my email/password
3. [More About SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)
4. Test `ssh -T git@github.com`

# Git Alias

helpful to shorten frequently used commands
`git config --global alias.<aliasName> "<Command to be Aliased>"`
[Read More](https://opensource.com/article/20/11/git-aliases) or Search Google for **git alias list**

# Stash

Stash is like a box to save file wouthout the need to commit it

1. To show stash `git stash list`
2. To create stash `git stash <FileName>`
3. To get file from stash
   - `git stash pop` Pop will cut the file from the stash
   - `git stash apply` apply will cut the file from the stash
4. To get Specific file from stash

   - `git stash pop <stashId>` Pop will cut the file from the stash
   - `git stash apply <stashId>` apply will cut the file from the stash

5. To delete all files in stash `git stash clear`
6. To show stash last file `git stash show`
7. To show stash Specific file `git stash show <stashId>`
8. To save stash by name `git stash dave <MessageHere>`
