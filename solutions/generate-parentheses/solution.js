// Problem: Generate Parentheses
// LeetCode: https://leetcode.com/problems/generate-parentheses/
// Language: javascript
// Runtime: 1 ms
// Memory: 55.9 MB
// Submitted: 2025-08-17

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let an = [];
    function fn(s, o, c) {
        if (o === n && c === n) an.push(s)
        if (o > n || c > n || c > o) return
        fn(s + ")", o, c + 1)
        fn(s + "(", o + 1, c)
    }
    fn("", 0, 0)
    return an
};
