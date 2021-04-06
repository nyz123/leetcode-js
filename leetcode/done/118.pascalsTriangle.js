/** 杨辉三角
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
    输入: 5
    输出:
    [
        [1],
        [1,1],
        [1,2,1],
        [1,3,3,1],
        [1,4,6,4,1]
    ]
 */

 /**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res=[];
    for (let i = 0; i < numRows; i++) {
        res[i] = []
        for (let j = 0; j <= i; j++) {
            if(j==0||j==i) res[i][j] = 1;
            else res[i][j] = res[i-1][j-1]+res[i-1][j]
        }
    }
    return res
};
console.log(generate(5));
