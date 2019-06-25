// 执行该函数
// 作用域不会污染, Node 没有全局作用域
// require('./callFun.js')
const call = require('./callFun')

console.log('call:', call.arr)