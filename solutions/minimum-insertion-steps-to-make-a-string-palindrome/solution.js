// Problem: Minimum Insertion Steps to Make a String Palindrome
// LeetCode: https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
// Language: javascript
// Runtime: 47 ms
// Memory: 62.5 MB
// Submitted: 2026-01-14

var minInsertions = function (s) {
    let n = s.length
    let revS = s.split("").reverse().join("")
    return n - longestCommonSubsequence(s, revS)
};

var longestCommonSubsequence = function (s, t) {
    let m = s.length;
    let n = t.length;

    let dp = Array.from({ length: m + 1 }, () => new Array(n + 1));

    for (let i = 0; i <= m; i++) dp[i][0] = 0; // 1st col
    for (let j = 0; j <= n; j++) dp[0][j] = 0; // 1st row

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
};

