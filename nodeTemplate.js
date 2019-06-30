let template = require('art-template')

let res = template.render('Hello {{ name }}', {
    name: 'World'
})

console.log(res)