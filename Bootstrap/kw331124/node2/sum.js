// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i]
//     }
//     return total;
// }
// console.log(sum(1, 2, 3, 5));


// function sum(...r) {
//     let total = 0;
//     for (const value of r) {
//         total += value;
//     }
//     return total;
// }
// console.log(sum(11, 22, 3, 5, 33));


// function sum(...r) {
//     let total = r.reduce((a, b) => {
//         return a + b;
//     }, 0)
//     return total;
// }
// console.log(sum(11, 22, 3, 5, 33));


module.exports = {
    desc: '这是张三写的求和模块，欢迎使用',
    sum(...r) {
        let total = r.reduce((a, b) => {
            return a + b;
        }, 0)
        return total;
    }
}

