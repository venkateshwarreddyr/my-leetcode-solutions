// Problem: A Number After a Double Reversal
// LeetCode: https://leetcode.com/problems/a-number-after-a-double-reversal/
// Language: javascript
// Runtime: 94 ms
// Memory: 38.2 MB
// Submitted: 2022-01-19

/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    if(num%10 || num===0) return true
    return false
};
