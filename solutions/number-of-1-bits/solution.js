// Problem: Number of 1 Bits
// LeetCode: https://leetcode.com/problems/number-of-1-bits/
// Language: javascript
// Runtime: 84 ms
// Memory: 39.8 MB
// Submitted: 2021-05-31

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).replace(/0/g, '').length
};
