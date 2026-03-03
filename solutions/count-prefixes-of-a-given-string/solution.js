// Problem: Count Prefixes of a Given String
// LeetCode: https://leetcode.com/problems/count-prefixes-of-a-given-string/
// Language: javascript
// Runtime: 55 ms
// Memory: 42.7 MB
// Submitted: 2023-05-11

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    
    return words.filter(e => s.startsWith(e)).length
};
