// Problem: Reverse Words in a String III
// LeetCode: https://leetcode.com/problems/reverse-words-in-a-string-iii/
// Language: javascript
// Runtime: 62 ms
// Memory: 47.9 MB
// Submitted: 2023-10-01

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(e => e.split('').reverse().join('')).join(' ')
};
