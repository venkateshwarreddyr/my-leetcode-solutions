// Problem: Find the Pivot Integer
// LeetCode: https://leetcode.com/problems/find-the-pivot-integer/
// Language: javascript
// Runtime: 63 ms
// Memory: 41.8 MB
// Submitted: 2023-07-06

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    let tsum = (n * (n + 1)) / 2;
    let s = 0
    for (let i = 1; i <= n; i++) {
        if ((tsum - s) === s + i) {
            return i
        } else {
            s += i
        }
    }

    return -1
};
