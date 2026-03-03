// Problem: Maximize Sum of At Most K Distinct Elements
// LeetCode: https://leetcode.com/problems/maximize-sum-of-at-most-k-distinct-elements/
// Language: javascript
// Runtime: 6 ms
// Memory: 57.5 MB
// Submitted: 2025-10-12

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function (a, k) {
    let set = new Set(a)
    a = [...set].sort((a, b) => b - a)
    return a.slice(0, k)
};
