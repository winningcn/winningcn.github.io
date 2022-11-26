---
title: 有疑有解第一期 —— windows 下笔记本编写sh脚本在 ubuntu 下无法解析
banner_img: 'http://168.138.211.177/img/banner_2.JPG'
date: 2021-06-02 13:48:10
tags: 
- 编码 
- 系统
category: 有疑有解
excerpt: 记事本 notepad 是不推荐了，专业点，上vscode吧。
hide:
---
### 问题描述
- windowns 下编写的sh文件 上传的到 ubuntu 下无法执行
- windowns 下编写工具： 记事本 -notepad
### utf-8 & unicode 问题密码
非英文环境专有问题，系统 传输 应用 转换过程中，字符编码稍不注意就会出问题。
本地推荐做法：
- 系统英文版
- 路径 文件名 单词 字母 避免中文
- 推荐 专业编辑器 处理字符文件
- python等 语言 有专门的库检测字符类型
### 一旦出现服务器脚本不执行 
服务器端推荐做法：
- 先安装 sudo apt install dos2unix
安装如上，开发人员早就想到了我们的问题
- 再运行 dos2unix xx.sh