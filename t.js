const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
})

// let paths = 'G:/WorkSpace/JavaScript-Basic-Study/www/' personPC
let paths = 'F:/Common/JavaScript-Basic-Study/www/'  // companyPC

server.on('request', (req, res) => {

  fs.readFile('F:/Common/JavaScript-Basic-Study/template.html', (err, data) => {
    if (err) {
      return res.end('The File Read Failed')
    } else {
      let template = require('art-template')
      let html = template.render(data.toString(), {
        name: 'Fan',
        age: 18,
        sex: 'M',
      })
      console.log(html)
      res.end(html)
    }
  })
})

server.listen(3000, ()=> {
  console.log('Server Client Start')
})