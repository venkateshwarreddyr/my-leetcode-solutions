// Problem: Find the Key of the Numbers
// LeetCode: https://leetcode.com/problems/find-the-key-of-the-numbers/
// Language: javascript
// Runtime: 2 ms
// Memory: 51.2 MB
// Submitted: 2024-11-25

/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
    let arr = []
    while (num1 != 0 || num2 != 0 || num3 != 0) {
        arr.unshift(Math.min(num1 % 10, num2 % 10, num3 % 10))
        num1 = Math.floor(num1 / 10)
        num2 = Math.floor(num2 / 10)
        num3 = Math.floor(num3 / 10)
    }
    return Number(arr.join(''))
};
