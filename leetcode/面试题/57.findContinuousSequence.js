/**
 * 和为s的连续正数序列
输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
示例 1：
输入：target = 9
输出：[[2,3,4],[4,5]]
示例 2：
输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]] 
限制：
1 <= target <= 10^5
 */
// n>=2
// n=2: x+(x+1)=target=2x+1
// n=3: x+(x+1)+(x+2)=target=3x+3
// n=4: ... target=4x+6
// n: target = x+(x+1)+...(x+n-1)=nx+n(n-1)/2=target x=(target-n(n-1)/2)/n
// 7 4 4x=9 5x+10=15 6x+15=15 
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let x,res = [],n=2;
    do{
        x = (target-n*(n-1)/2)/n;
        if(Number.isInteger(x)){
            let temp=[]
            for (let i = 0; i < n; i++) {
                temp.push(x+i)
            }
            res.unshift(temp)
        }
        n++
    }while(x>1)
    return res
};
console.log(findContinuousSequence(15));
