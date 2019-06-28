// 引入HTTP核心模块
const http = require('http')
const fs = require('fs')


// text/html  对于一般网页
// text/plain 对于一般文本
// text/css 对于级联样式表
// text/javascript 对于JavaScript
// application/octet-stream 意味着“下载这个文件”
// application/x-java-applet 对于 Java applets
// application/pdf 对于 PDF 文档

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Fans', 'THIS')
  // 文本类型 UTF-8
  // res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF-8' })
  // res.end('<h1> End </h1>')
})

// resuest response
server.on('request', (req, res) => {
  console.log('客户端请求路径：', req.url)
  console.log('收到客户端请求')
  // res.write('write data')
  // remotePort 远程端口号
  console.log('客户端请求端口号：', req.socket.remotePort)
  // remoteAddress 远程地址
  console.log('请求访问远程IP地址：', req.socket.remoteAddress)
  // let data = [
  //   {
  //     code: 200,
  //     data: [{
  //       one: 'one'
  //     },{
  //       two: 'two'
  //     },{
  //       three: 'three'
  //     }]
  //   }
  // ]
  // 服务端发送数据 UTF-8, 客户端系统默认的编码
  // res.end(JSON.stringify(data))
  // 结束响应
  // res.end('<h1> <a style="text-decoration: none" href="https://www.jd.com"> JD.COM </a> </h1>')
  fs.readFile('./video.html', (err, data) => {
    if (err) {
      res.end('读取文件失败，请稍后重试！')
    } else {
      // 二进制 字符转
      res.end(data)
    }
  })
})

// 监听3000 端口
server.listen(80, () => {
  console.log('服务器启动成功')
})