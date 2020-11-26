
// function sum(...r) {
//     let total = 0;
//     for (const value of r) {
//         total += value;
//     }
//     return total;
// }


module.exports = {
    desc: '这是张三写的求和模块，欢迎使用',
    sum(...r) {
        let total = r.reduce((a,b) => {
            return a+b;
        }, 0)
        return total;
    }
}