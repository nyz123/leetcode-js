var search = function (nums, target) {
    // 二分法
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        let mid = Math.ceil((l + r) / 2);
        if (nums[mid] == target) return true;
        else if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && nums[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (target >= nums[l] || target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }
}
console.log(search([1, 0, 1, 1, 1], 0));