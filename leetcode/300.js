var lengthOfLIS = function (nums) {
    let last = nums[i - 1]
    if (nums.length == 1) {
        return 1
    } else if (nums.length == 2) {
        return nums[1]>nums[0] ? 2 : 1
    } 
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));