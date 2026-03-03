// Problem: String Matching in an Array
// LeetCode: https://leetcode.com/problems/string-matching-in-an-array/
// Language: javascript
// Runtime: 2 ms
// Memory: 48.9 MB
// Submitted: 2025-01-07

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let n = words.length;

    return words.filter(word => words.some(w => word !== w && w.includes(word)))
};
