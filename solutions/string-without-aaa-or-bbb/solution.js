// Problem: String Without AAA or BBB
// LeetCode: https://leetcode.com/problems/string-without-aaa-or-bbb/
// Language: javascript
// Runtime: 67 ms
// Memory: 41.3 MB
// Submitted: 2023-07-04

cl = console.log
/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function (a, b) {
    if (a === 0) return "b".repeat(b)
    if (b === 0) return "a".repeat(a)
    if (a > b) return "aab" + strWithout3a3b(a - 2, b - 1)
    if (a < b) return "bba" + strWithout3a3b(a - 1, b - 2)
    return "ab" + strWithout3a3b(a - 1, b - 1)
};
