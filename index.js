/**
 * git init => khởi tạo git
 * git status => kiểm tra trạng thái
 * git add => Thêm một hoặc nhiều file vào track
 * git commit => đóng gói các file đã add etc: git commit -m "Something..."
 * 
 * git log => xem lại lịch sử đã commit
 * git show <ID> => xem thay đổi trong file  
 * git diff // diffrent => kiểm tra thay đổi mới của các file đã modified / add
 * 
 * 
 * working directory
 * staging area
 * git repository
 * 
 * git checkout --<file> => loại bỏ những dòng đã thêm khi chưa lên staging area 
 * git reset <FILE> => trả về working dir
 * 
 * git checkout -b <branch> (branching) => Tạo nhánh mới và checkout vào nhánh đó
 * git checkout <branch> => chuyển nhánh
 * git merge // gộp 2 nhánh 
 * A <--- B
 * git checkout A
 * merge B
 * git branch -D <branch> // xoá
 * 
 * git reset --soft <to_commit>
 * git reset --mixed <to_commit>
 * git reset --hard <to_commit>
 * 
 * git revert <commit>
 * 
 * .gitignore // bỏ qua check status
 *  
 * // Cho lên github
 * git remote add origin <link_project>
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
 *     4.1. review code online (github)
 *     4.2. fetch branch into local to test offline (optional)
 *     4.3. approve the pull request
 * 5/ merge to master
 * 
 * // Resolve conflicts
 * When will conflicts happen?
 *    1. Changing the same file + same line
 *    2. A deleted file X, B modified file X
 * Method 1:
 *    1. Using 'git rebase'
 *    2. Resolve conflict
 *    3. Push again with -f
 * Method 2:
 *    1. Merge updated master to feature branch
 *    2. Resolve conflict
 *    3. Commit and push
 */

var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');


var dog = new Dog('Tom');
var tom = new Cat();

var cat = new Cat();
var mouse = new Mouse('Mickey');
try {
    cat.eat(dog);
} catch (error) {
    console.log('Error while cat eating a dog');
}
console.log(cat);
