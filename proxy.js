// let handler = {
//   get: function (target, name) {
//     return name in target ? target[name] : 66
//   }
// }

// let num = new Proxy({}, handler)

// num.a = 1
// num.b = undefined

// console.log('num.a: ', num.a, 'num.b', num.b)
// // 该对象是否存在该属性
// console.log('a' in num, num.c)

let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // The default behavior to store the value
    obj[prop] = value;
  }
};

let person = new Proxy({}, validator);

person.age = 100;

console.log(person.age); 
// 100

person.age = 'young'; 
// 抛出异常: Uncaught TypeError: The age is not an integer

person.age = 300; 
// 抛出异常: Uncaught RangeError: The age seems invalid