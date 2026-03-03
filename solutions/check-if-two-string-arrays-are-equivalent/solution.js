// Problem: Check If Two String Arrays are Equivalent
// LeetCode: https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
// Language: javascript
// Runtime: 72 ms
// Memory: 38.9 MB
// Submitted: 2021-07-30

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('')
};
