// Problem: Maximum Score After Splitting a String
// LeetCode: https://leetcode.com/problems/maximum-score-after-splitting-a-string/
// Language: javascript
// Runtime: 61 ms
// Memory: 41.6 MB
// Submitted: 2023-06-01

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let maxscore = -Infinity
    let n = s.length;
    let end = s.replaceAll('0', '').length;
    let start = 0
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === '0') {
            start++
        } else {
            end--
        }

        maxscore = Math.max(maxscore, start + end)
    }

    return maxscore
};
