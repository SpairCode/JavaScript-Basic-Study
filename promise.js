function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x)
      }, 2000)
    })
  }
  
  async function f1() {
    var x = await resolveAfter2Seconds(10)
    console.log(x) // 10
  }

  f1()

  async function f2() {
    var y = await 20
    console.log(y) // 20
  }
  
  f2()

  async function f3() {
    try {
      var z = await Promise.reject(30)
    } catch (e) {
      console.log(e) // 30
    }
  }

  f3()