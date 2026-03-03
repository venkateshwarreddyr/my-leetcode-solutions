// Problem: Alternating Digit Sum
// LeetCode: https://leetcode.com/problems/alternating-digit-sum/
// Language: javascript
// Runtime: 69 ms
// Memory: 42.2 MB
// Submitted: 2023-01-25

/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    return n.toString().split("").reduce((a, c, i) => i%2 === 0 ? a+Number(c) : a-Number(c), 0)
};
