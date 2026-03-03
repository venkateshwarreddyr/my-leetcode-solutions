// Problem: Minimum Changes To Make Alternating Binary String
// LeetCode: https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
// Language: javascript
// Runtime: 100 ms
// Memory: 44.5 MB
// Submitted: 2023-12-28

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let f = +s[0];
    let t = +s[0] ? 0 : 1;
    let c1 = 0
    let c2 = 0
    for (let c of s) {
        if (f !== +c) {
            c1++
        }
        if (t !== +c) {
            c2++
        }
        f = f ? 0 : 1
        t = t ? 0 : 1
    }

    return Math.min(c1, c2)


};
