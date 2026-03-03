// Problem: Minimum Substring Partition of Equal Character Frequency
// LeetCode: https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/
// Language: javascript
// Runtime: 856 ms
// Memory: 65.9 MB
// Submitted: 2026-01-30

var minimumSubstringsInPartition = function (s) {
    const n = s.length;
    // balanced string
    //    is a string where each character in the string occurs the same number of times.
    let dp = new Array(n + 1).fill(n);
    dp[0] = 0;
 
    for (let i = 1; i <= n; i++) {
        let min = n;
        let o = new Array(26).fill(0);
        let uniqueCharCount = 0;
        let maxFreq = 0;
 
        for (let j = i - 1; j >= 0; j--) {
            let ch = s[j].charCodeAt() - "a".charCodeAt();
            o[ch]++;
            if (o[ch] === 1) uniqueCharCount++;
 
            maxFreq = Math.max(maxFreq, o[ch]);
 
            if (i - j === uniqueCharCount * maxFreq) {
                min = Math.min(min, dp[j] + 1);
            }
        }
        console.log(dp)
        dp[i] = min;
    }
 
    return dp[n];
};
 
