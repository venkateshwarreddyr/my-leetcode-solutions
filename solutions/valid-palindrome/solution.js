// Problem: Valid Palindrome
// LeetCode: https://leetcode.com/problems/valid-palindrome/
// Language: javascript
// Runtime: 100 ms
// Memory: 44.8 MB
// Submitted: 2021-08-07

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    x = s.toLowerCase().replaceAll(/[^A-Za-z0-9]/g, '').split('');
    
    return x.join('') === x.reverse().join('')
};
