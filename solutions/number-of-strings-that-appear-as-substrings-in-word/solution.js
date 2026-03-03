// Problem: Number of Strings That Appear as Substrings in Word
// LeetCode: https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/
// Language: javascript
// Runtime: 105 ms
// Memory: 39.9 MB
// Submitted: 2021-08-15

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    return patterns.filter(e => word.includes(e)).length
};
