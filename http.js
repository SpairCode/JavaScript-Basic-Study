// 引入HTTP核心模块
const http = require('http')

// 设置请求头
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'THIS');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.end('<h1> End </h1>');
})

// resuest response
server.on('request', (req, res) => {
  console.log('客户端请求路径：', req.url)
  console.log('收到客户端请求')
  // res.write('write data')
  console.log('客户端请求端口号：', req.socket.remotePort)
  console.log('连接本地IP地址：', req.socket.remoteAddress)
  let data = [
    {
      code: 200,
      data: [{
        one: 'one'
      },{
        two: 'two'
      },{
        three: 'three'
      }]
    }
  ]
  res.end(JSON.stringify(data)) // 结束响应
})

// 监听3000 端口
server.listen(3000, () => {
  console.log('服务器启动成功')
})