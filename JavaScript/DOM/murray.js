let _ = {
    throttle(callback, wait) {
        let endTime = 0
        return function () {
            if (new Date() - endTime < wait) return; //console.log('too busy')
            let res = callback.apply(this, arguments) // 防止this指错
            endTime = new Date()
            return res
        }
    },

    getHMSFromMS(ms) {
        let sec = Math.floor(ms / 1000)
        let h = _.repairZero(Math.floor(sec / 3600))
        // console.log(h);
        let m = _.repairZero(Math.floor(sec % 3600 / 60))
        // console.log(m);
        let s = _.repairZero(sec % 3600 % 60)
        // console.log(s);
        return {
            h,
            m,
            s
        }
    },
    repairZero: function (num) {
        return num < 10 ? ('0' + num) : num
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