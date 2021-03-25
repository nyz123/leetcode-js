var canJump = function (nums) {
    let lastRight = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        if (lastRight >= i) {
            const item = nums[i];
            lastRight = Math.max(i + item, lastRight)
            if (lastRight >= len - 1) { return true }
        }
    }
    return false
};

console.log(canJump([2, 3, 1, 1, 4]));