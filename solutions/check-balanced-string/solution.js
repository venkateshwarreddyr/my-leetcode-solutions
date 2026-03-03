// Problem: Check Balanced String
// LeetCode: https://leetcode.com/problems/check-balanced-string/
// Language: javascript
// Runtime: 4 ms
// Memory: 50.8 MB
// Submitted: 2024-11-25

/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
    let sum = 0

    let i = 0
    for (let e of num.toString()) {
        if (i % 2 === 0) {
            sum += Number(e)
        } else {
            sum -= Number(e)
        }

        i++
    }

    return sum === 0
};
