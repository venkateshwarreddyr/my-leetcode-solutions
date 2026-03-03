// Problem: Find Triangular Sum of an Array
// LeetCode: https://leetcode.com/problems/find-triangular-sum-of-an-array/
// Language: javascript
// Runtime: 123 ms
// Memory: 43.8 MB
// Submitted: 2023-06-24

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (a) {
    let cl = console.log
    let n = a.length;
    if (n === 1) return a[0];

    while (n > 1) {
        for (let i = 0; i < n - 1; i++) {
            a[i] = (a[i] + a[i + 1]) % 10
        }
        n--
    }

    return a[0]

};
