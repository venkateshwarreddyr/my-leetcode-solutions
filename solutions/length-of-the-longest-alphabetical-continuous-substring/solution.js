// Problem: Length of the Longest Alphabetical Continuous Substring
// LeetCode: https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/
// Language: javascript
// Runtime: 20 ms
// Memory: 62.3 MB
// Submitted: 2025-11-29

/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
    let n = s.length
    let dp = new Array(n).fill(1)

    for (let i = 1; i < n; i++) {
        let prev = s.charCodeAt(i - 1)
        let curr = s.charCodeAt(i)
        if (curr === prev + 1)
            dp[i] += dp[i - 1]
    }

    return Math.max(...dp)

};
