// Problem: Maximum Median Sum of Subsequences of Size 3
// LeetCode: https://leetcode.com/problems/maximum-median-sum-of-subsequences-of-size-3/
// Language: javascript
// Runtime: 103 ms
// Memory: 87.3 MB
// Submitted: 2025-11-12

function maximumMedianSum(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const start = n / 3;
    let sum = 0;
    for (let i = start; i < n; i += 2) {
        sum += nums[i];
    }
    return sum;
}
