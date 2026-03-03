// Problem: Number of Segments in a String
// LeetCode: https://leetcode.com/problems/number-of-segments-in-a-string/
// Language: javascript
// Runtime: 52 ms
// Memory: 38.4 MB
// Submitted: 2021-08-07

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.split(" ").filter(e => e).length;
};
