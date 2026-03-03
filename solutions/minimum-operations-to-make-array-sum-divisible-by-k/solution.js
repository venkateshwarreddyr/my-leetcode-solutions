// Problem: Minimum Operations to Make Array Sum Divisible by K
// LeetCode: https://leetcode.com/problems/minimum-operations-to-make-array-sum-divisible-by-k/
// Language: javascript
// Runtime: 2 ms
// Memory: 57.4 MB
// Submitted: 2025-11-29

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum = nums.reduce((a, c) => a + c, 0);

    let rem = sum % k;
    return rem
};
