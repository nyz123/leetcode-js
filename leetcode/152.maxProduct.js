/**
 * 乘积最大子序列
给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。
示例 1:
输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:
输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 */
var maxProduct = function(nums) {
    let max = Number.MIN_SAFE_INTEGER,imin=1,imax=1;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]<0){
            let t = imin;
            imin = imax;
            imax = t;
        }
        imax = Math.max(imax*nums[i],nums[i]);
        imin = Math.min(imin*nums[i],nums[i]);
        max = Math.max(max,imax);
    }
    return max;
};
console.log(maxProduct([-9,2,-8,3,-2]));
console.log(maxProduct([-2,0,-9]));
