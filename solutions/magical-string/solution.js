// Problem: Magical String
// LeetCode: https://leetcode.com/problems/magical-string/
// Language: javascript
// Runtime: 447 ms
// Memory: 62.5 MB
// Submitted: 2025-11-30

/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n) {
    let s = '122'
    let next = '1'
    for (let i = 2; s.length <= n; i++) {
        if (s[i] === '1') {
            s += next
        } else {
            s += (next + next)
        }

        if (next === '1') {
            next = '2'
        } else {
            next = '1'
        }
    }

    s = s.slice(0, n)
    let ans = 0

    for (let c of s) {
        if (c === '1') ans++
    }

    return ans

};
