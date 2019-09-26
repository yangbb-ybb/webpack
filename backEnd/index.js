var fs = require('fs');
var path = require('path');
var express = require('express');

var server = express();

const Vue = require('vue');
// 创建一个render实例
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./test.html', 'utf-8')
});

server.get('*', (req, res) => {
  // 创建一个 Vue 实例
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `
      <div>
        <div>访问的 URL 是： {{ url }}</div>
      </div>
    `
  })
  // 根据 传递进来的端口 进行动态路由渲染
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error:' + err)
      return
    }
    // 其实是可以设置 请求头的
    // html就是Vue实例app渲染的html
    res.end(`${html}`)
  })
})

// 监听端口
const HOSTNAME = '127.0.0.1';
const PORT = 3000;

server.listen(PORT, HOSTNAME, () => {
  console.log(`Serves is running at ${HOSTNAME}:${PORT}`);
});