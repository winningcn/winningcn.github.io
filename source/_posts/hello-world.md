---
title: hexo 命令 fluid 配置 markdown 语法 指北
banner_img: https://cdn.jsdelivr.net/gh/winningcn/PB/img/banner_1.JPG
tags: 
- hexo 
- index 
category: hexo折腾
excerpt: hexo 初始记。
hide:
---
 [Hexo](https://hexo.io/)!  Check [documentation](https://hexo.io/docs/) for more info. [fluid](https://fluid-dev.github.io/hexo-fluid-docs/guide/#%E5%AF%BC%E8%88%AA%E8%8F%9C%E5%8D%95)

## Quick Start

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Generate static files

``` bash
$ hexo generate
```
### clean

``` bash
$ hexo clean
```

### Run server

``` bash
$ hexo server
```

### Deploy to remote sites 
设置  

[^1]: 需设置远端地址

``` git
$ hexo deploy 
```
### hexo 支持的markdown特性
<mark>参考</mark> 


``` markdown
<mark>参考</mark>
```
{% note success %}
文字 或者 `markdown` 均可 primary secondary success danger warning info light
{% endnote %}
``` markdown
{% note success %}
文字 或者 `markdown` 均可 primary secondary success danger warning info light
{% endnote %}
```
{% label primary @text %}
``` markdown
{% label primary @text %}
```
{% btn url, text, title %}
``` markdown
{% btn url, text, title %}
```

{% cb text, checked?, incline? %}
``` markdown
{% cb text, checked?, incline? %}
```
<ruby>饕餮 <rt>tāo tiè</rt></ruby> 是古代中国神话传说中的一种神秘怪物，别名叫 <ruby>狍鸮 <rt>páo xiāo</rt></ruby>，古书《山海经·北次二经》介绍其特点是：其形状如羊身人面，眼在腋下，虎齿人手
``` markdown
<ruby>饕餮 <rt>tāo tiè</rt></ruby> 是古代中国神话传说中的一种神秘怪物，别名叫 <ruby>狍鸮 <rt>páo xiāo</rt></ruby>，古书《山海经·北次二经》介绍其特点是：其形状如羊身人面，眼在腋下，虎齿人手
```
<del>长蛇座</del> ~~~del~~~ <ins>半人马座</ins> 

``` markdown
<del>长蛇座</del> ~~del~~  <ins>半人马座</ins> 
```
{% gi total 5 3-2 %}
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
{% endgi %}
``` markdown
{% gi total 5 3-2 %}
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
{% endgi %}
```
jsdeliver 静态图片
``` markdown
![banner_2](https://cdn.jsdelivr.net/gh/winningcn/PB/img/banner_2.JPG)
![inde_1](https://cdn.jsdelivr.net/gh/winningcn/PB/img/inde_1.JPG)
![inde_2](https://cdn.jsdelivr.net/gh/winningcn/PB/img/inde_2.JPG)
![avatar](https://cdn.jsdelivr.net/gh/winningcn/PB/img/avatar.png)
![index_b](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_b.JPG)
![favicon](https://cdn.jsdelivr.net/gh/winningcn/PB/img/favicon.png)
![index_x](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_x.JPG)
![index_d](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_d.JPG)
![index_p](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_p.JPG)
![index_y](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
![loading](https://cdn.jsdelivr.net/gh/winningcn/PB/img/loading.gif)
![police_beian](https://cdn.jsdelivr.net/gh/winningcn/PB/img/police_beian.png)
![index_z](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_z.JPG)
![wechat_show](https://cdn.jsdelivr.net/gh/winningcn/PB/img/wechat_show.png)
![banner_1](https://cdn.jsdelivr.net/gh/winningcn/PB/img/banner_1.png)
![default](https://cdn.jsdelivr.net/gh/winningcn/PB/img/default.png)
```
### git tips
如何删除 github 文件夹
``` bash
# 步骤：（以删除.idea文件夹为例）

git rm -r --cached .idea  #--cached不会把本地的.idea删除
git commit -m 'delete .idea dir'
git push -u origin master
```
如何撤消git rm
``` bash
# 如果你已经提交更改，则：

git reset (--hard) HEAD~1  #彻底回退到指定commit-id的状态，暂存区和工作区也会变为指定commit-id版本的内容
# 如果不是那么：

git reset
git checkout -- $(git ls-files -d)
```
git 本地远端 对齐
``` bash
git pull --rebase origin master
# 再次执行
git push origin master
```
[上传github仓库主分支一般步骤](https://zhuanlan.zhihu.com/p/31443926)
### 更新

2021-5-31 about 页面 增加播放器，增加[BMI](https://60minutejs.vercel.app/BMI-Calculator/index.html) 计算，hexo 的 injector.js 一定要放在 \hexo\themes\fluid\scripts 目录下。

### Todo

- [ ] [给 Hexo 博客添加 PWA 支持 ](https://xiejilu.com/2020/04/23/hexo-pwa/)

- [x] [HEXO INJECTOR](https://blog.2to.fun/post/hexo-injector/)
### for ref 
[hexo how to](https://wizardforcel.gitbooks.io/markdown-simple-world/content/hexo-tutor-1.html)
[fluid customization](https://erenship.com/posts/40222.html#****)
[hexo的fluid主题添加瀑布流懒加载相册功能](https://blog.csdn.net/qq_36264495/article/details/112448622)
[git-tips](https://github.com/521xueweihan/git-tips)
[git sheet](https://training.github.com/downloads/zh_CN/github-git-cheat-sheet/)
[Git Cheatsheet](https://ndpsoftware.com/git-cheatsheet.html#loc=local_repo;)
[css color keywords](http://caibaojian.com/css3/appendix/color-keywords.htm)
More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)

 