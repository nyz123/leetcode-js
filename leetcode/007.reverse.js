/**
 * 整数反转
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let res = x.toString().split('').reverse()
    if (res[res.length - 1] == '-') {
        res = '-' + res.slice(0, res.length - 1).join('')
    } else {
        res = res.join('')
    }
    res = parseInt(res);
    return (res > (Math.pow(2, 31) - 1) || res < (Math.pow(2, 31) * (-1))) ? 0 : res
};

console.log(reverse(1534236469));