/**
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
    说明：
    所有数字都是正整数。
    解集不能包含重复的组合。
    输入: k = 3, n = 7
    输出: [[1,2,4]]
 */
var combinationSum3 = function(k, n) {
    let temp = [];
    const ans = [];
    const check = (mask, k, n) => {
        temp = [];
        for (let i = 0; i < 9; ++i) {
            if ((1 << i) & mask) {
                temp.push(i + 1);
            }
        }
        return temp.length === k && temp.reduce((previous, value) => previous + value, 0) === n;
    }

    for (let mask = 0; mask < (1 << 9); ++mask) {
        if (check(mask, k, n)) {
            ans.push(temp);
        }
    }
    return ans;
};

console.log(combinationSum3(9,45));