// Problem: Count Substrings Starting and Ending with Given Character
// LeetCode: https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/
// Language: javascript
// Runtime: 66 ms
// Memory: 56.4 MB
// Submitted: 2024-03-17

/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
var countSubstrings = function(s, c) {
    let cc = 0
    
    for(let ch of s) {
        if(c === ch) {
            cc++
        }
    }
    
    return cc * (cc + 1) /2
};
