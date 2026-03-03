// Problem: Minimum Number of Steps to Make Two Strings Anagram
// LeetCode: https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
// Language: javascript
// Runtime: 90 ms
// Memory: 46.7 MB
// Submitted: 2023-06-24

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    function fn(w) {
        let arr = new Array(26).fill(0)
        let offset = 97
        for (let c of w) {
            c = c.charCodeAt() - offset
            arr[c]++
        }

        return arr
    }
    let a = fn(s)
    let b = fn(t)
    let cc = 0
    for (let c = 0; c < 26; c++) {
        if ((a[c]) > (b[c])) {
            cc += (a[c] - b[c])
        }
    }

    return cc;
};
