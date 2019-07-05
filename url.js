let url = require('url')

let u = url.parse('https://www.google.com/search?q=Node&ie=utf-8', true)
// KeyWord transfer Data
console.log(u.query.q)
