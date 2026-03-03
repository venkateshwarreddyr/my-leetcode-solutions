// Problem: Power of Three
// LeetCode: https://leetcode.com/problems/power-of-three/
// Language: javascript
// Runtime: 252 ms
// Memory: 51.8 MB
// Submitted: 2023-07-10

cl = console.log
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n === 1) return true
    if (n <= 0) return false
    if (n % 3 === 0) {
        return isPowerOfThree(n / 3)
    } 
    return false
};
