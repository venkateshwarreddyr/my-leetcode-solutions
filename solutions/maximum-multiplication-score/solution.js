// Problem: Maximum Multiplication Score
// LeetCode: https://leetcode.com/problems/maximum-multiplication-score/
// Language: javascript
// Runtime: 23 ms
// Memory: 70.7 MB
// Submitted: 2026-01-14

var maxScore = function (a, b) {

    const dp = new Array(4).fill(-Infinity);
        console.log(dp)
 
    for (let i = 0; i < b.length; i++) {

        const x = b[i];
 
        // new 'b' ele will multiply with next ele of 'a' of previously selected 'a' ele

        dp[3] = Math.max(dp[3], dp[2] + a[3] * x);

        dp[2] = Math.max(dp[2], dp[1] + a[2] * x);

        dp[1] = Math.max(dp[1], dp[0] + a[1] * x);

        dp[0] = Math.max(dp[0],     0 + a[0] * x);
        // console.log(dp)
    }
 
    return dp[3];

};
