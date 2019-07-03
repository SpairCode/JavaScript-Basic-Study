const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const template = require('art-template')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
})

const List = [{
  name: 'Vivo',
  message: '你说啥'
}]

server.on('request', (req, res) => {
  let URL = req.url
  console.log('IP', req.socket.localAddress)
  if (path.extname(URL) === '.css') {
    res.setHeader('Content-Type', 'text/css')
  } else {
    res.setHeader('Content-Type', 'text/html')
  }

  if (URL === '/') {
    fs.readFile('./bbs/list.html', (err, data) => {
      if (err) {
        return res.end('file read is failed')
      } else {
        let html = template.render(data.toString(), {
            List: List
        })
        return res.end(html)
      }
    })
  } else if (path.parse(URL).name === 'forms') {
    let msg = url.parse(URL, true)
    let data = {
      name: msg.query.name,
      message: msg.query.message
    }
    List.push(data)
    res.writeHead(302, {
      'Location': '/'
    })
    res.end()
  } else {
    fs.readFile('./bbs/' + URL, (err, data) => {
      if (err) {
        return res.end('file read is failed')
      } else {
        return res.end(data)
      }
    })  
  }
})

server.listen(3000, () => {
  console.log('Server Client Start')
})
