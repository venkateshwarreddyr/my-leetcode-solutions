// Problem: Minimum Time Difference
// LeetCode: https://leetcode.com/problems/minimum-time-difference/
// Language: javascript
// Runtime: 88 ms
// Memory: 49.4 MB
// Submitted: 2023-06-30

cl = console.log
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (a) {
    a = a.map(e => {
        let [h, m] = e.split(":").map(s => +s)

        return h * 60 + m
    }).sort((a, b) => a - b)
    let min = Infinity
    a.push(24 * 60 + a[0])
    let n = a.length
    for (let i = 1; i < n; i++) {
        min = Math.min(min, a[i] - a[i - 1])
    }

    return min
};
