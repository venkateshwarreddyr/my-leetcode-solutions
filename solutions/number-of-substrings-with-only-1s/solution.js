// Problem: Number of Substrings With Only 1s
// LeetCode: https://leetcode.com/problems/number-of-substrings-with-only-1s/
// Language: javascript
// Runtime: 5 ms
// Memory: 56.8 MB
// Submitted: 2025-11-16

/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
    let cc = 0
    let ans = 0
    let MOD = 10 ** 9 + 7
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            ans = (ans + cc * (cc + 1) / 2) % MOD
            cc = 0
        } else {
            cc++
        }
    }
    ans = (ans + cc * (cc + 1) / 2) % MOD
    return ans
};
