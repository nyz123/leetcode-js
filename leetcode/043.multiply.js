/** 
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let arr1 = num1.split(''), arr2 = num2.split('');
    let m = arr2.length, n = arr1.length;
    let res = new Array(m + n);
    res.fill(0)
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let c = res[i + j+1] + arr2[i] * arr1[j];
            res[i + j] += Math.floor(c / 10)
            res[i + j + 1] = c % 10
        }
    }
    let i;
    for (i = 0; i < res.length; i++) {
        if(res[i]!==0){
            break
        }
    }
    return res.slice(i).join('')||"0"
};

console.log(multiply('123', '456'));