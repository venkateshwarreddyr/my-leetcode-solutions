// Problem: Smallest Even Multiple
// LeetCode: https://leetcode.com/problems/smallest-even-multiple/
// Language: javascript
// Runtime: 62 ms
// Memory: 41 MB
// Submitted: 2023-05-10

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    return n%2 === 0 ? n : n*2
};
