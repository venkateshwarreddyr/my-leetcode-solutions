// Problem: Minimize Maximum of Array
// LeetCode: https://leetcode.com/problems/minimize-maximum-of-array/
// Language: javascript
// Runtime: 2 ms
// Memory: 66.4 MB
// Submitted: 2025-12-17

var minimizeArrayValue = function (a) {
    let s = 0
    let maxAvg = -Infinity
    let c = 0
    for (let x of a) {
        s += x
        c++
        const avg = s / c
        maxAvg = Math.max(maxAvg, avg)
    }
    return Math.ceil(maxAvg)
};

