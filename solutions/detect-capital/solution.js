// Problem: Detect Capital
// LeetCode: https://leetcode.com/problems/detect-capital/
// Language: javascript
// Runtime: 65 ms
// Memory: 41.8 MB
// Submitted: 2023-05-30

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (word === word.toUpperCase()) return true;
    word = word.slice(1)
    if (word === word.toLowerCase()) return true;
    return false

};
