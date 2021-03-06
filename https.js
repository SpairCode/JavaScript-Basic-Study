const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
})

// let paths = 'G:/WorkSpace/JavaScript-Basic-Study/www/' personPC
let paths = 'F:/Common/JavaScript-Basic-Study/www/'  // companyPC

server.on('request', (req, res) => {
  console.log('URL:', req.url)
  let filePath = 'index.html'

  if (req.url !== '/') {
    filePath = req.url + '.html'
  }

  fs.readFile(paths + filePath, (err, data) => {
    if (err) {
      console.log('error', err)
      return res.end('The File Read Failed')
    } else {
      return res.end(data)
    }
  })
})

server.listen(3000, ()=> {
  console.log('Server Client Start')
})