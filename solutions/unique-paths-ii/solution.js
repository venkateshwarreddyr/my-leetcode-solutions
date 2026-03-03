// Problem: Unique Paths II
// LeetCode: https://leetcode.com/problems/unique-paths-ii/
// Language: javascript
// Runtime: 1 ms
// Memory: 55.3 MB
// Submitted: 2025-07-31

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (grid) {
    let m = grid.length
    let n = grid[0].length
    if (grid[0][0] === 1) return 0
    let dp = Array.from({ length: m }, () => new Array(n).fill(0))

    dp[0][0] = 1
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) continue
            if (i === 0 && j === 0) continue
            dp[i][j] = (dp[i - 1]?.[j] ?? 0) + (dp[i][j - 1] ?? 0)
        }
    }

    return dp[m - 1][n - 1]
};
