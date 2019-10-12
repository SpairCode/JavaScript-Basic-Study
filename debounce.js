var count = 1;
var container = document.getElementById('container');

function getUserAction() {
  container.innerHTML = count++;
};

// 第一版
// function debounce(func, wait) {
//   var timeout;
//   return function () {
//     clearTimeout(timeout)
//     timeout = setTimeout(func, wait);
//   }
// }

// 第二版
function debounce(func, wait) {
  var timeout;  
  return function () {
    var context = this;  
    clearTimeout(timeout)
    timeout = setTimeout(function(){
      func.apply(context)
    }, wait);
  }
}

// container.onmousemove = getUserAction
container.onmousemove = debounce(getUserAction, 1000);
