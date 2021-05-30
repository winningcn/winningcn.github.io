---
title: hexo 命令 fluid 配置 markdown 语法 指北
index_img: https://cdn.jsdelivr.net/gh/winningcn/PB/img/inde_2.JPG
banner_img: https://cdn.jsdelivr.net/gh/winningcn/PB/img/banner_1.JPG
excerpt: 配置啥的，不明白的看看。
hide:
---
 [Hexo](https://hexo.io/)!  Check [documentation](https://hexo.io/docs/) for more info.  
 [fluid](https://fluid-dev.github.io/hexo-fluid-docs/guide/#%E5%AF%BC%E8%88%AA%E8%8F%9C%E5%8D%95)

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
### hexo 支持的markdown特性
[^1]
``` bash 
$ hexo deploy 
```
{% note success %}
文字 或者 `markdown` 均可 primary secondary success danger warning info light
{% endnote %}
``` bash 
{% note success %}
文字 或者 `markdown` 均可 primary secondary success danger warning info light
{% endnote %}
```
{% label primary @text %}
``` bash 
{% label primary @text %}
```
{% btn url, text, title %}
``` bash 
{% btn url, text, title %}
```

{% cb text, checked?, incline? %}
``` bash 
{% cb text, checked?, incline? %}
```
{% gi total 5 3-2 %}
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
{% endgi %}
``` bash 
{% gi total 5 3-2 %}
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
  ![](https://cdn.jsdelivr.net/gh/winningcn/PB/img/index_y.JPG)
{% endgi %}
```
jsdeliver 静态图片
``` bash 
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

### for ref 
[how to](https://wizardforcel.gitbooks.io/markdown-simple-world/content/hexo-tutor-1.html)
[fluid customization](https://erenship.com/posts/40222.html#****)
[hexo的fluid主题添加瀑布流懒加载相册功能](https://blog.csdn.net/qq_36264495/article/details/112448622)
[git-tips](https://github.com/521xueweihan/git-tips)
More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)
## 参考
[^1]: 配置git