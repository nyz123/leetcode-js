/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    let len = nums.length;
    if (len == 0) return false
    for (let i = 1; i < len; i++) {
        let max = nums[i], max_i = i, left = max;
        for (let j = 0; j < max_i; j++) {
            if (nums[j] < left) { left = nums[j] }
        }
        for (let j = max_i + 1; j < len; j++) {
            if (nums[j] > left && nums[j] < max) return true
        }
    }
    return false
};

console.log(find132pattern([1,3,2,4,5,6,7,8,9,10]));