// Problem: Longest Palindromic Subsequence
// LeetCode: https://leetcode.com/problems/longest-palindromic-subsequence/
// Language: javascript
// Runtime: 275 ms
// Memory: 87.5 MB
// Submitted: 2023-06-09

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    let n = s.length
    let t1 = s
    let t2 = s.split('').reverse().join('')
    let dp = [...new Array(n + 1)].map(e => new Array(n + 1).fill(0))
    for (let i = n - 1; i > -1; i--) {
        for (let j = n - 1; j > -1; j--) {
            if (t1[i] === t2[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }

    return dp[0][0]
};
