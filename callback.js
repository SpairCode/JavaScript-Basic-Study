function fn(callback) {
  setTimeout(function () {
    let data = 'Hello'
    callback(data)
  }, 1000)
}

fn(function(data) {
  console.log(data)
})

