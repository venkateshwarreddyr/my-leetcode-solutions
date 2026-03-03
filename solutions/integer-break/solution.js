// Problem: Integer Break
// LeetCode: https://leetcode.com/problems/integer-break/
// Language: javascript
// Runtime: 67 ms
// Memory: 42.8 MB
// Submitted: 2023-10-06

cl = console.log
var integerBreak = function (N) {
    let dp = new Array(N + 1);
    dp[0] = 1
    dp[1] = 1

    for (let n = 2; n <= N; n++) {
        let val = n === N ? 0 : n
        for (let i = 1; i < n; i++) {
            val = Math.max(val, dp[i] * dp[n - i])
        }
        dp[n] = val
    }

    // return dfs(N);
    cl(dp)
    return dp[N]
};
