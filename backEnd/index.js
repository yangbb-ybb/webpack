var express = require('express');
var server = express();

const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer();

// app.get('/api', function (res, rep) {
//   rep.send('Hello, word!');
// });

server.get('*', (req, res) => {
  // 创建一个 Vue 实例
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    // html就是Vue实例app渲染的html
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1.0">
          <title>新建项目</title>
        </head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(3000);