// Problem: Shifting Letters
// LeetCode: https://leetcode.com/problems/shifting-letters/
// Language: javascript
// Runtime: 171 ms
// Memory: 68.6 MB
// Submitted: 2023-07-04

/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
    let a = s.split("").map(e => e.charCodeAt() - 97)
    let n = s.length
    let sum = 0
    let an = ""
    for (let i = n - 1; i > -1; i--) {
        sum += shifts[i]
        a[i] += sum
        a[i] %= 26
        an = (String.fromCharCode(a[i] + 97)) + an
    }

    return an;
};
