// Problem: Minimum Add to Make Parentheses Valid
// LeetCode: https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
// Language: javascript
// Runtime: 64 ms
// Memory: 42.9 MB
// Submitted: 2023-06-24

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    if (s.length === 1) return 1
    let cc = 0
    let p = 0
    for (let c of s) {
        if (c == '(') {
            p++
        } else {
            if (p) {
                p--
            } else {
                cc++
            }
        }

    }

    return p + cc;

};
