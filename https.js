const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
})

let paths = 'G:/WorkSpace/JavaScript-Basic-Study/www/'

server.on('request', (req, res) => {
  console.log('Url', req.url)
  if (req.url === '/') {
    fs.readFile(paths + 'index.html', (err, data) => {
      if (err) {
        return res.end('The File Read Failed')
      } else {
        return res.end(data)
      }
    })
  } else if (req.url === '/login') {
    fs.readFile(paths + 'Login.html', (err, data) => {
      if (err) {
        return res.end('The File Read Failed')
      } else {
        return res.end(data)
      }
    })
  } else {
    fs.readFile(paths + 'error.html', (err, data) => {
       if (err) {
         return res.end('The File Read Failed')
       } else {
         return res.end(data)
       }
    })
  }
})

server.listen(3000, ()=> {
  console.log('Server Client Start')
})