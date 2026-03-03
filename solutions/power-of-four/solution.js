// Problem: Power of Four
// LeetCode: https://leetcode.com/problems/power-of-four/
// Language: javascript
// Runtime: 1 ms
// Memory: 57.7 MB
// Submitted: 2025-08-15

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n === 1) return true
    if (n <= 0) return false
    let l = false, r = false
    if (n % 4 === 0) {
        l = isPowerOfFour(n / 4)
    } else {
        r = false
    }
    return l || r
};
