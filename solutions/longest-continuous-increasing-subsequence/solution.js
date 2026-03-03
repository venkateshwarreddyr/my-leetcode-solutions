// Problem: Longest Continuous Increasing Subsequence
// LeetCode: https://leetcode.com/problems/longest-continuous-increasing-subsequence/
// Language: javascript
// Runtime: 60 ms
// Memory: 42.3 MB
// Submitted: 2023-05-30

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (a) {
    let max = 1
    let n = a.length;
    let c = 1
    for (let i = 1; i < n; i++) {
        if (a[i] > a[i - 1]) {
            c++
            max = Math.max(max, c)
        } else {
            c = 1
        }
    }

    return max
};
