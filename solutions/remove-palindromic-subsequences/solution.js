// Problem: Remove Palindromic Subsequences
// LeetCode: https://leetcode.com/problems/remove-palindromic-subsequences/
// Language: javascript
// Runtime: 59 ms
// Memory: 42.3 MB
// Submitted: 2023-05-10

/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    
    return s === s.split('').reverse().join('') ? 1 : 2
};
