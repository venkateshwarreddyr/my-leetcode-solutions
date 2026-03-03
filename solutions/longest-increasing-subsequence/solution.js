// Problem: Longest Increasing Subsequence
// LeetCode: https://leetcode.com/problems/longest-increasing-subsequence/
// Language: javascript
// Runtime: 84 ms
// Memory: 54.9 MB
// Submitted: 2026-01-17

var lengthOfLIS = function (a) {
    let n = a.length
    let dp = new Array(n + 1).fill(1)

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (a[j] < a[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }

    return Math.max(...dp)
}

