// Problem: Reverse Degree of a String
// LeetCode: https://leetcode.com/problems/reverse-degree-of-a-string/
// Language: javascript
// Runtime: 1 ms
// Memory: 57.7 MB
// Submitted: 2025-06-14

/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let cc = 0

    for(let i = 0; i<s.length; i++) {
        let c = (26 - (s.charCodeAt(i) - 97)) * (i + 1)

        cc += c
    }

    return cc
};
