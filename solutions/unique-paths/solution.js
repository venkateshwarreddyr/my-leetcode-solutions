// Problem: Unique Paths
// LeetCode: https://leetcode.com/problems/unique-paths/
// Language: javascript
// Runtime: 0 ms
// Memory: 52.9 MB
// Submitted: 2025-07-31

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = Array.from({ length: m }, () => new Array(n).fill(1))

    dp[0][0] = 1
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = (dp[i - 1][j]) + (dp[i][j - 1])
        }
    }

    return dp[m - 1][n - 1]

};
