// Problem: Minimum Falling Path Sum II
// LeetCode: https://leetcode.com/problems/minimum-falling-path-sum-ii/
// Language: javascript
// Runtime: 204 ms
// Memory: 45.1 MB
// Submitted: 2023-08-18

cl = console.log
var minFallingPathSum = function (g) {
    let m = g.length
    let n = g[0].length

    let dp = Array.from({ length: m }, () => new Array(n).fill(0))
    dp[m-1] = [...g[m - 1]]
    for (let i = m - 2; i > -1; i--) {
        for (let p = 0; p < n; p++) {
            let min = Infinity
            for (let j = 0; j < n; j++) {
                if (p === j) continue;
                min = Math.min(min, g[i][p] + dp[i + 1][j])
            }

            dp[i][p] = min
        }
    }

    return Math.min(...dp[0])
};

