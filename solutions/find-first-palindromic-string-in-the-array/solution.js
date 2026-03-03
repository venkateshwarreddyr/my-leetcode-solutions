// Problem: Find First Palindromic String in the Array
// LeetCode: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
// Language: javascript
// Runtime: 104 ms
// Memory: 46.5 MB
// Submitted: 2022-01-05

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let curr of words)
        if(curr === curr.split('').reverse().join('')) return curr
    return ''
};
