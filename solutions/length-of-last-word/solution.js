// Problem: Length of Last Word
// LeetCode: https://leetcode.com/problems/length-of-last-word/
// Language: javascript
// Runtime: 76 ms
// Memory: 38.8 MB
// Submitted: 2021-07-05

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length
};
