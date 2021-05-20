var myAtoi = function (s) {
    s = s.trim()
    let i = 0, len = s.length
    for (; i < len; i++) {
        let item = s[i]
        if(i == 0 && ['-','+'].includes(item)) continue
        else if (isNaN(Number(item))) break
    }
    if (i == 0) { return 0 }
    else {
        s = Number(s.substring(0, i))
    }
    let MAX = Math.pow(2, 31) -1,MIN = Math.pow(2, 31) * (-1)
    return s > MAX ? MAX : s < MIN ? MIN : s    
};

console.log(myAtoi("-+42sdsfd"));