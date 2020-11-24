let name1 = '张三';
let age1 = 19;
let name2 = '李四';
let intro1 = () => {
    console.log('我是一个模块,啦啦啦');
}

// 导出重命名， 把name1重命名为a
export {name1 as a, age1, name2, intro1}