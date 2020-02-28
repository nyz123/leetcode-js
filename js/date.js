function Xdate(date) {
    let argsCount = arguments.length
    this.date = new Date()
    if (date && typeof date === 'string' && argsCount === 1) {
        this.date = new Date(date.replace(/-/g, '/'))
    } else if (argsCount === 3) {
        this.date = new Date(arguments[0], arguments[1], arguments[2])
    } else if (date) {
        this.date = new Date(date)
    }
}
Xdate.prototype.format = function (format) {
    let date = this.date
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return format
}
Xdate.prototype._addDay = function (day) {
    let date = this.date
    let dayMilliseconds = 86400000
    let newDate = new Xdate(+date + day * dayMilliseconds)
    return newDate
}
Xdate.prototype.addDay = function (day) {
    return this._addDay(day)
}
export default Xdate
