---
title: 关于页面增加BMI检测
banner_img: 'http://168.138.211.177/img/banner_2.JPG'
date: 2021-06-07 07:30:22
tags:
- bmi
- hexo
category: hexo折腾
index_img:
excerpt: 不可能改进一项无法测量的数据。
hide:
---
### 任务描述
- 基于 fluid 主题， 在 about 页面 输入体重，自动生成 BIM 体脂率相关信息 。
### 改动增加页面
- 改动 hexo\source\about\index.md
- 新增 hexo\themes\fluid\scripts\injector.js // injector 似乎必须放在这个目录下面
- 新增 hexo\source\js\bmi.js 
### 改动逻辑
1. about index.md   增加 页面 元素 
``` html
- 1998-5 <mark> <span name="weight" > 40    </span>kg</mark> 当前 BMI :**<span name="bmi"> </span>**    <span name="bmi-category"></span>
```
2. bmi.js 提取 index 数据 计算 并 显示 
**计算**
``` js
function checkCategory(value) {
  if (isFinite(value)) {
    if (value >= 30.0) {
      return [`Obese`];
    } else if (value >= 25.0 && value <= 29.9) {

      return [`超标了`, 'red'];
    } else if (value >= 18.5 && value <= 24.9) {

      return [`正常`, 'black'];
    } else if (value <= 18.4) {

      return [`太瘦了`, 'purple'];
    }
  } else {

    return ``;
  }
}
```
**提取并展示**
``` js
 let weightgroup = document.getElementsByName('weight')
    let bmigroup = document.getElementsByName("bmi")
    let bmicatgroup = document.getElementsByName("bmi-category")
    let height = 175;
    let weightindex = weightgroup.length
    let bmiMetric;
    //console.log(weightgroup.length)
    for (let i = 0; i < weightindex; i++) {
      let bmi = weightgroup[i].innerHTML / (height * height); // bmi in kg/cm*cm
      bmiMetric = (bmi * 10000).toFixed(1); //bmi in kg/m*m rounded to 1 decimal
      bmigroup[i].innerHTML = bmiMetric;
     [bmicatgroup[i].innerHTML,bmicatgroup[i].style.color]= checkCategory(bmiMetric);
```
3. injector 注入 bmi.js 和 样式表
### 效果展示
[参考](/about)