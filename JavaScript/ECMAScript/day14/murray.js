let $ = {
    throttle(callback, wait) {
        let endTime = 0
        return function () {
            if (new Date() - endTime < wait) return; //console.log('too busy')
            let res = callback.apply(this, arguments) // 防止this指错
            endTime = new Date()
            return res
        }
    },
    trim(str) {
        //如果是null或者undefind直接返回空字符串
        return !str ? '' : str.trim()
    },
    repairZero: function (num) {
        return num < 10 ? ('0' + num) : num
    },
    isLeapYear: function (year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    },
    reverseStr: function (str) {
        return str.split('').reverse().join('')
    }
}

Date.prototype.getChinaText = function () {
    let date = this
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    let h = date.getHours()
    let mi = date.getMinutes()
    let s = date.getSeconds()
    let ymd = [y, m, d].join('-')
    let hms = [h, mi, s].join(':')
    let all = [ymd, hms].join(' ')
    return all
}


//字符串马赛克  18899998989  188****8989
String.prototype.mosaic = function (start, end) { }

//首字母大写 ace  Ace
String.prototype.capitalize = function () { }

//溢出省略 hello world    hell
String.prototype.ellipsis = function (len) { }

//补零9  09
String.prototype.repair0 = function () { }

//删除数组指定位置的元素
Array.prototype.removeAt = function (i) { }


//2020-09-09
Date.prototype.getChinaDate = function () { }

//11:22:23
Date.prototype.getChinaTime = function () { }

//获取是周几
Date.prototype.getWeekDay = function () { }

//判断是否润年
Date.prototype.isLeapYear = function () { }

//1分钟前
Date.prototype.getShortText = function () { }