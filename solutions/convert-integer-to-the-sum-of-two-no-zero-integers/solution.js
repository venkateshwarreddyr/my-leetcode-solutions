// Problem: Convert Integer to the Sum of Two No-Zero Integers
// LeetCode: https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.5 MB
// Submitted: 2025-09-08

/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {

    for (let i = 1; i < n; i++) {
        if (!i.toString().includes('0') && !(n - i).toString().includes('0')) {
            return [i, n - i]
        }
    }
};
