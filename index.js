/**
 * git init
 * git status
 * git add
 * git commit
 * 
 * git log
 * git show
 * git diff // diffrent
 * 
 * 
 * wroking directory
 * staging area
 * git repository
 * 
 * git checkout -- <file>
 * git reset
 * 
 * git checkout -b <branch> (branching)
 * git checkout <branch>
 * git merge // gộp 2 nhánh
 * A <--- B
 * git checkout A
 * merge A to B
 * git branch -D <branch>
 * 
 * git reset --soft <to_commit>
 * git reset --mixed <to_commit>
 * git reset --hard <to_commit>
 * 
 * git revert <commit>
 * 
 * .gitignore // bỏ qua check status
 * 
 * git remote add origin <link>
 * git remote -v
 * git push -u origin master
 * 
 * git config --global credential.helper store
 * ^^^ not recommend (~/.git-credentials)
 * 
 * git config --global credential.helper "cache --timeout=18000" // 5 hours
 * 
 * google "gnome-keyring" "git ssh" // Ubuntu
 * 
 * 
 * git clone
 * git pull
 * 
 * *pull request
 * 1/ git checkout -b <feature_branch>
 * 2/ git push origin <branch>
 * 3/ create a pull request on Github
 * 4/ review code
 * 5/ merge to master
 */

 var Dog = require('./Dog');
 var Cat = require('./Cat');


 var dog = new Dog('Tom');
 var tom = new Cat();
 dog.eat(tom);
console.log(dog);