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
 * git merge
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
 */

 var Dog = require('./Dog');
 var dog = new Dog('Tom');
 dog.sayHi();