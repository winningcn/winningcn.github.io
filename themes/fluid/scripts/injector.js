hexo.extend.injector.register('body_end', `
  <script defer src="/js/bmi.js"></script>
`,
  'about');

hexo.extend.injector.register('head_end', `
<style type="text/css">
[name="weight"]{margin-left:1rem;}
[name="bmi"]{margin-right:1rem;margin-left:1rem;}
[name="bmi-category"]{margin-left:2rem;}
</style>`,
  'about')
