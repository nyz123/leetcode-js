/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。你可以假设数组中无重复元素。
 * 输入: [1,3,5,6], 5  输出: 2
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let l = 0, r = nums.length - 1, mid = Math.floor((l + r) / 2);
    while (nums[mid] !== target && r > l) {
        if (nums[mid] > target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
        mid = Math.floor((l + r) / 2)
    }
    const res =  nums[mid] < target ? mid + 1 : mid
    return res<0? 0 :res;
};

console.log(searchInsert([1, 3,5,6], 5));