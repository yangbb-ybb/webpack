> 项目说明
```bash
    差不多webpack 项目搭建
```
> webpack配置相关
```bash
    npm i 加载插件
    npm run dev 本地预览
    npm run build 打包线上(真实环境)
    npm run buildtest 速度慢，会处理多余代码
```
> 当前已经完成的功能
``` bash
    热加载，webpack-dev-serve 监听
    postcss+autoprefixed完成css 前缀加载
    extract-text-webpack-plugin 进行css 文件抽离
    babel
    html模板打包
    static静态文件复制
    vue+vue-router完成页面加载
```
> 后于需要完成的 功能
``` bash
    功能：
        增加vueX(次要);
        增加nprogress应该是进度条
        增加ls(不必要)
        增加 flow 或者 引入typescript 进行文件变量类型声明
        增加 less 或者 sass 或者 stylus 
    优化
        查看文档，增加线上环境webpack配置
        增加css 多线程文件 进行文件打包
        增加js  多进程文件打包
    目前功能就完成这个样子吧，基本上webpack的 搭建原理也了解的差不多了 剩下的就是插件的运用了
    需要看的东西太多了，^-^
```
```bash
    一些坑:
    babel升级后必须使用新的库
    "@babel/core": "^7.5.5",
    "@babel/plugin-transform-runtime": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    webpack4+ 不支持 extract-text-webpack-plugin 必须使用 @next
    postcss 使用autoprefixed 需要配置 .postcssrc  @import等需要库支持
    cross-env 需要写再最前面
    extract-text-webpack-plugin配合使用 postcss
```
