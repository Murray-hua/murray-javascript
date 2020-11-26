
// node.js导出模块 module.exports
// module.exports.a = 'kw33'
// module.exports.b = '奥利给'
// module.exports.sayHello = function(){
//     console.log('hello');
// }

module.exports = {
    myclass: 'KW33',
    quote: '教育改变生活',
    say(){
        console.log(this.quote);
    }
}