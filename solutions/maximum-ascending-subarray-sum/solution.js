// Problem: Maximum Ascending Subarray Sum
// LeetCode: https://leetcode.com/problems/maximum-ascending-subarray-sum/
// Language: javascript
// Runtime: 59 ms
// Memory: 42.4 MB
// Submitted: 2023-05-23

cl = console.log
var maxAscendingSum = function (nums) {
    let n = nums.length;

    let sum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) {
            sum += nums[i]
        } else {
            maxSum = Math.max(maxSum, sum);
            sum = nums[i]
        }
    }

    return Math.max(maxSum, sum);
};
