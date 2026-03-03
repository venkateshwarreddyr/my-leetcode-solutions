// Problem: Largest 3-Same-Digit Number in String
// LeetCode: https://leetcode.com/problems/largest-3-same-digit-number-in-string/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.5 MB
// Submitted: 2025-08-14

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    for (let i = 9; i > -1; i--) {
        let x = ('' + i).repeat(3)
        if (num.includes(x)) return x
    }
    return ""
};
