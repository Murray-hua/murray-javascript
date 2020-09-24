
//字符串马赛克  18899992929  188****2929
String.prototype.mosaic = function () {
    if (this.length === 11)
        return this.replace(this.substr(3, 4), '*'.repeat(4))
    else if (this.length === 18)
        return this.replace(this.substr(6, 8), '*'.repeat(8))
}
//首字母大写     ace Ace
String.prototype.capitalize = function () {
    return this.replace(this.substr(0, 1), this.substr(0, 1).toUpperCase())
}
//溢出省略 hello world hell···
String.prototype.ellipsis = function (len) {
    return this.replace(this.substr(len), '···')
}
//补零   9     09
String.prototype.repairZero = function () {
    let str = ''
    if (this.length > 1) return str = this.substr(0);
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(this.substr(0)))
        return str = '0' + this.substr(0)
}
//删除数组指定的位置元素
Array.prototype.removeAt = function (len) {
    return this.splice(len, 1)
}
//2020-09-09
Date.prototype.getChinaDate = function () {
    return [this.getFullYear(), (this.getMonth() + 1).toString().repairZero(), this.getDate().toString().repairZero()].join('-')
}
//11:22:23
Date.prototype.getChinaTime = function () {
    return [this.getHours().toString().repairZero(), this.getMinutes().toString().repairZero(), this.getSeconds().toString().repairZero()].join(':')
}
//判断是否为闰年
Date.prototype.isLeapYear = function () {
    return this.getFullYear() % 4 === 0 && this.getFullYear() % 100 !== 0 || this.getFullYear() % 400 === 0
}
//获取星期
Date.prototype.getWeekDay = function () {
    return '星期' + '日一二三四五六' [this.getDay()]
}
//一分钟之前
Date.prototype.getShortText = function (date) {
    let d2 = new Date(date)
    let ymd1 = [d2.getFullYear(), d2.getMonth() + 1, d2.getDate()].join('-')
    let hms1 = [d2.getHours(), d2.getMinutes(), d2.getSeconds()].join(':')
    let Day = '星期' + '日一二三四五六' [d2.getDay()]
    let all1 = [Day, ' ', ymd1, ' ', hms1].join('')
    let sec = Math.round((this - d2) / 1000)
    // console.log(sec);
    if (sec < 60) {
        return 'just'
    } else if (sec < 3600) {
        return `${Math.round(sec/60)}分钟前`
    } else if (sec < 3600 * 24) {
        return `${Math.round(sec/60/60)}小时前`
    } else {
        console.log(all1);
    }
}