// Problem: Minimize String Length
// LeetCode: https://leetcode.com/problems/minimize-string-length/
// Language: javascript
// Runtime: 135 ms
// Memory: 50.8 MB
// Submitted: 2023-06-04

/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let set = new Set(s)
    
    return set.size
};
