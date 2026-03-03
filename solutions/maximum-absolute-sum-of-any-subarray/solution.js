// Problem: Maximum Absolute Sum of Any Subarray
// LeetCode: https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/
// Language: javascript
// Runtime: 2 ms
// Memory: 60.8 MB
// Submitted: 2025-10-27

var maxAbsoluteSum = function (a) {
    let maxs = 0
    let s = 0
    let s2 = 0
    for (let x of a) {
        s += x
        s2 += x
        if (s < x) s = x
        if (s2 > x) s2 = x
        maxs = Math.max(maxs, s, Math.abs(s2))
    }
    return maxs
};

