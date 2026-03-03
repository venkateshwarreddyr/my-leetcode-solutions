// Problem: Reverse String Prefix
// LeetCode: https://leetcode.com/problems/reverse-string-prefix/
// Language: javascript
// Runtime: 1 ms
// Memory: 54.4 MB
// Submitted: 2026-01-03

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let first = s.slice(0, k)
    let last = s.slice(k)

    return first.split('').reverse().join('') + last
};
