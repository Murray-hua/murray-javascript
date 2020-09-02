function repairZero(num) {
    //一个函数只能return一次，遇到return就到此为止
    return num < 10 ? ('0' + num) : num
}

//闰年  被4整除且不能被100整除，或者直接被400整除
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

function reverseStr(str) {
    return str.split('').reverse().join('')
}