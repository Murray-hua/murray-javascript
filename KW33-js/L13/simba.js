let _ = {
    throttle(callback, wait) {
        let endTime = 0
        return function () {
            if (new Date() - endTime < wait) return;
            let res = callback.apply(this, arguments)
            endTime = new Date()
            return res
        }
    },
    trim(str) {
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