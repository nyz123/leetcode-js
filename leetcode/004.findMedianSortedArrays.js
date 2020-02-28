/**
 * 寻找两个有序数组的中位数
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [].concat(nums1,nums2),mid = nums.length/2.0
    nums.sort(function(a,b){return a-b})
    let right = Math.floor(mid),result;
    if(mid === right){
        return (nums[right-1]+nums[right])/2.0
    }else{
        return nums[right]
    }
};
// Runtime: 160 ms, faster than 29.16% of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 39.4 MB, less than 43.21% of JavaScript online submissions for Median of Two Sorted 