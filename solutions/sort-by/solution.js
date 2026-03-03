// Problem: Sort By
// LeetCode: https://leetcode.com/problems/sort-by/
// Language: javascript
// Runtime: 125 ms
// Memory: 56.3 MB
// Submitted: 2023-12-13

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b))
};
