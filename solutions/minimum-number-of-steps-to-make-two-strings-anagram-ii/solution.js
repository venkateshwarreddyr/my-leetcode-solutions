// Problem: Minimum Number of Steps to Make Two Strings Anagram II
// LeetCode: https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/
// Language: javascript
// Runtime: 119 ms
// Memory: 53.3 MB
// Submitted: 2023-06-30

cl = console.log
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    let o = new Array(26).fill(0)

    for (let c of s) {
        c = c.charCodeAt() - 97
        o[c]++
    }

    for (let c of t) {
        c = c.charCodeAt() - 97
        o[c]--
    }

    return o.reduce((a, c) => a + Math.abs(c), 0)
};
