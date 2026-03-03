// Problem: Arithmetic Slices
// LeetCode: https://leetcode.com/problems/arithmetic-slices/
// Language: javascript
// Runtime: 0 ms
// Memory: 54 MB
// Submitted: 2025-11-07

var numberOfArithmeticSlices = function (nums) {
    let total = 0, dp = 0;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            dp += 1;
            total += dp;
        } else {
            dp = 0;
        }
    }
    return total;
};
