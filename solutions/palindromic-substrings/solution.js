// Problem: Palindromic Substrings
// LeetCode: https://leetcode.com/problems/palindromic-substrings/
// Language: javascript
// Runtime: 113 ms
// Memory: 70 MB
// Submitted: 2023-06-10

cl = console.log
var countSubstrings = function (s) {
    let n = s.length;
    let c = 0
    let dp = [...new Array(n + 1)].map((e) => new Array(n + 1).fill(0));
    for (let g = 0; g < n; g++) {
        for (let i = 0, j = g; i < n && j < n; i++, j++) {
            if (i - j === 0) {
                dp[i][j] = 1
                c++
            } else if (j - i === 1 && s[i] === s[j]) {
                dp[i][j] = 1
                c++
            } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = 1
                c++
            }
        }
    }

    return c
};
//.   0 1 2
//    f d s k l f
// 0f 1 1 0    
// 1d   1 0    
// 2s     1   
// 3k       1
// 4l          1
// 5f            1

// [
//     [1, 0, 1, 0],
//     [0, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 0]
// ]



