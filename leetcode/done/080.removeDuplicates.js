var removeDuplicates = function (nums) {
    let i = 2;
    while (i < nums.length) {
        if (nums[i - 2] == nums[i]) {
            nums.splice(i-1,1)
        }else{
            i++
        }
    }    
    return nums.length
};
console.log(removeDuplicates([1, 1,1, 2]));