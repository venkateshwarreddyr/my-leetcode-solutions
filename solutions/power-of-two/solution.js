// Problem: Power of Two
// LeetCode: https://leetcode.com/problems/power-of-two/
// Language: javascript
// Runtime: 0 ms
// Memory: 55.7 MB
// Submitted: 2025-08-09

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 1) return true
    if (n <= 0) return false
    let l = false, r = false
    if (n % 2 === 0) {
        l = isPowerOfTwo(n / 2)
    } else {
        r = false
    }
    
    return l || r
};
