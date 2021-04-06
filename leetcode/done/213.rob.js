/**
 * 打家劫舍 2
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
 * 这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
 * 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，
 * 系统会自动报警 。给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，
 * 能够偷窃到的最高金额。
 */
var myRob = function (nums) {
    let res = new Array(nums.length)
    res.fill(0)
    if (nums.length == 0) return 0
    else if (nums.length == 1) return nums[0]
    else {
        res[0] = nums[0]
        res[1] = Math.max(nums[0],nums[1])
        for (let i = 2; i < nums.length; i++) {
            res[i] = Math.max(res[i-1],res[i-2]+nums[i])
        }
        return res[nums.length-1]
    }
};

var rob = function (nums){
    if (nums.length == 0) return 0
    else if (nums.length == 1) return nums[0]
    else if (nums.length == 2) return Math.max(nums[0],nums[1])
    else return Math.max(myRob(nums.slice(0,nums.length-1)),myRob(nums.slice(1)))
}

console.log(rob([1,3,1,3,100]));
