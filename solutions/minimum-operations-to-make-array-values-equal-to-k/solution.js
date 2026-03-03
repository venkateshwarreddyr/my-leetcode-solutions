// Problem: Minimum Operations to Make Array Values Equal to K
// LeetCode: https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/
// Language: javascript
// Runtime: 58 ms
// Memory: 56.1 MB
// Submitted: 2025-10-12

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (a, k) {
    a = [... new Set(a)].sort((a, b) => a - b)
    if (k === a[0]) return a.length - 1
    if (k < a[0]) return a.length
    return -1
};
