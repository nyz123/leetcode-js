var jump = function (nums) {
    let len = nums.length, res = new Array(len), lastRight = 0;
    if (len == 1) return 0
    res.fill(0)
    for (let i = 0; i < len; i++) {
        const item = nums[i];
        lastRight = Math.max(i + item, lastRight)
        for (let j = i + 1; j <= lastRight; j++) {
            res[j] = res[j] == 0 ? res[i] + 1 : Math.min(res[j], res[i] + 1)
        }
        if (lastRight >= len - 1) { return res[len - 1] }       
    }
    return res[len - 1]
};

console.log(jump([0]));