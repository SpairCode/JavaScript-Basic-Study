let http = require('http')
let fs = require('fs')

http.createServer((req, res) => {
  let url = req.url
  if (url === '/') {
    // 读取模板列表文件  
    fs.readFile('./template.html', (err, data) => {
      if (err) {
        res.end('404 Not Found')
      }
      res.end(data)
    })
  }  
  res.end('FeedBack')
}).listen(3000, ()=> {
  console.log('Server Client Start')
})