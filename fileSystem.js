const fs = require('fs')
//  readFile 异步获取 readFileSync 同步获取
fs.readFile('./fileSystem', (err, data) => {
  if (err) {
    console.error('ERROR')
  } else {
    //  将二进制数据转化为字符串数据
    console.log(data.toString())
  }
})