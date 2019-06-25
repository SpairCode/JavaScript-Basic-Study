const fs = require('fs')
//  path data callback
fs.writeFile('./Hello.md', 'Thii is wirteFile Demo', (err) => {
  if (err) {
    console.log('写入文件失败')
  } else {
    console.log('写入文件成功')
    fs.unlink('./Hellos.md', (err) => {
      if (err) {
        console.log('删除文件失败')
      } else {
        console.log('删除文件成功')
      }
    })
  }
})