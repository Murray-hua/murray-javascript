// 引入模块
let obj = require('./b.js')
console.log(obj.myclass);
obj.say();

console.log(obj.desc); // 这是一个求和模块
console.log( obj.sum(1,2,6) ); // 9