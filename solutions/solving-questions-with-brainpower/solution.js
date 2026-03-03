// Problem: Solving Questions With Brainpower
// LeetCode: https://leetcode.com/problems/solving-questions-with-brainpower/
// Language: javascript
// Runtime: 26 ms
// Memory: 94.5 MB
// Submitted: 2025-11-29

/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
    let n = questions.length
    let dp = new Array(n + 1).fill(0)
    for (let i = n - 1; i >= 0; i--) {
        let points = questions[i][0]
        let skip = questions[i][1]
        dp[i] = Math.max(dp[i + 1], points + (dp[i + skip + 1] ?? 0))
    }

    return dp[0]
};
