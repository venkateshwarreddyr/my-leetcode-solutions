// Problem: Uncrossed Lines
// LeetCode: https://leetcode.com/problems/uncrossed-lines/
// Language: javascript
// Runtime: 21 ms
// Memory: 56 MB
// Submitted: 2025-11-10

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (a, b) {
    let memo = Array.from({ length: a.length }, () => new Array(b.length))
    function fn(i, j) {
        if (i >= a.length) return 0
        if (j >= b.length) return 0
        if (memo[i][j] !== undefined) return memo[i][j]
        if (a[i] === b[j]) {
            return 1 + fn(i + 1, j + 1)
        }

        let max = -Infinity

        max = Math.max(max, fn(i, j + 1))
        max = Math.max(max, fn(i + 1, j))
        max = Math.max(max, fn(i + 1, j + 1))
        memo[i][j] = max
        return max
    }

    return fn(0, 0)
};
