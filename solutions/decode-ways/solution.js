// Problem: Decode Ways
// LeetCode: https://leetcode.com/problems/decode-ways/
// Language: javascript
// Runtime: 69 ms
// Memory: 41.9 MB
// Submitted: 2023-06-12

cl = console.log
var numDecodings = function (s) {
    let n = s.length;

    let dp = new Array(n + 1)
    for (let i = 0; i <= n + 1; i++) {
        if (i === 0) {
            dp[i] = 1
            continue;
        }
        let count = 0

        let a = s.slice(i - 1, i)
        let b = s.slice(i - 2, i)

        if (Number(a) !== 0) {
            count += (dp[i - 1] || 0)
        }

        if (Number(b) >= 10 && Number(b) <= 26) {
            count += (dp[i - 2] || 0)
        }

        dp[i] = count
    }

    return dp[n]

}


