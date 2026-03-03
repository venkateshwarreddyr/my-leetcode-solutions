// Problem: Triangle
// LeetCode: https://leetcode.com/problems/triangle/
// Language: javascript
// Runtime: 7 ms
// Memory: 55.3 MB
// Submitted: 2025-07-31

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let n = triangle.length
    let dp = new Array(n)

    for (let i = 0; i < n; i++) {
        dp[i] = new Array(i + 1).fill(0)
    }

    dp[0][0] = triangle[0][0]

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            dp[i][j] = triangle[i][j] + Math.min(dp[i - 1][j] ?? Infinity, dp[i - 1][j - 1] ?? Infinity)
        }
    }

    return Math.min(...dp[n - 1])
};
