// Problem: Append Characters to String to Make Subsequence
// LeetCode: https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/
// Language: javascript
// Runtime: 53 ms
// Memory: 51.8 MB
// Submitted: 2024-06-03

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
    let j = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[j]) {
            j++;
        }
    }

    return t.length - j
};
