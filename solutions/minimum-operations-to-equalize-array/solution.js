// Problem: Minimum Operations to Equalize Array
// LeetCode: https://leetcode.com/problems/minimum-operations-to-equalize-array/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.7 MB
// Submitted: 2025-10-12

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (a) {
    let set = new Set(a)
    return set.size === 1 ? 0 : 1
};
