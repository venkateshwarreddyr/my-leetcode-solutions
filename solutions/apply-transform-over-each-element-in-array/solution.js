// Problem: Apply Transform Over Each Element in Array
// LeetCode: https://leetcode.com/problems/apply-transform-over-each-element-in-array/
// Language: javascript
// Runtime: 55 ms
// Memory: 41.9 MB
// Submitted: 2023-12-13

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    return arr.map(fn)
};
