// Problem: Reverse Words in a String
// LeetCode: https://leetcode.com/problems/reverse-words-in-a-string/
// Language: javascript
// Runtime: 1 ms
// Memory: 57.1 MB
// Submitted: 2025-11-29

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.split(' ').filter(e => e).reverse().join(' ')
};
