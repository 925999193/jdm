# jdm
jdm--页面
hello github
git 命令记录

首先要配置key教程

ssh-keygen -C '925999193@qq.com' -t rsa;

会生成一个id_rsa.pub的文件，吧其中的key输入github中的账号中



常用的 
切换盘符：d:
ls cd ..
初始化路径--把自定义的本地文件路径与github绑定
1.进入自己定义的路径中，
2.git init命令初始化
克隆GitHub上的仓库到本地
git clone https://github.com/925999193/jdm


提交自己的代码

把需要提交的文件放在本地仓库中

git add 文件名

git commit -m "提交的注释，说明本次提交的内容"

git remote add origin https://github.com/925999193/jdm
如果出现 fatal: remote origin already exists
执行
git remote rm origin
再执行
git remote add origin https://github.com/925999193/jdm

最后：

git push origin master


创建分支并合并
1.创建分支-并切换到新的分支
git checkout -b dev (dev表示新的分支名称)
2.查看当前分支
git branch 
3.在新的分支上进行提交
4.切换回主分支master
git checkout master
5.分支合并
git merge dev
6.删除分支
git branch -d dev
7.查看剩余的分支
git branch(应该就只有一个分支了)
