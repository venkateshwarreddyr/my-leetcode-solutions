// Problem: Binary String With Substrings Representing 1 To N
// LeetCode: https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/
// Language: javascript
// Runtime: 1455 ms
// Memory: 41.8 MB
// Submitted: 2023-06-30

/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function (s, n) {
    let an = true
    for (let i = 1; i <= n; i++) {
        an = an && s.indexOf(i.toString(2)) > -1
    }

    return an;
};
