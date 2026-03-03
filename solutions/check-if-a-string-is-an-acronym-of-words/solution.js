// Problem: Check if a String Is an Acronym of Words
// LeetCode: https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/
// Language: javascript
// Runtime: 74 ms
// Memory: 44.1 MB
// Submitted: 2023-08-20

/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    
    words = words.map(e => e[0]).join("")
    
    return words === (s)
    
};
