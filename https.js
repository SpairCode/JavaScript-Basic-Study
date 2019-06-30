const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
})

let paths = 'G:/WorkSpace/JavaScript-Basic-Study/www/'

server.on('request', (req, res) => {
  let filePath = 'index.html'

  if (req.url !== '/') {
    filePath = req.url + '.html'
  }

  fs.readFile(paths + filePath, (err, data) => {
    if (err) {
      return res.end('The File Read Failed')
    } else {
      return res.end(data)
    }
  })
})

server.listen(3000, ()=> {
  console.log('Server Client Start')
})