// Problem: Construct K Palindrome Strings
// LeetCode: https://leetcode.com/problems/construct-k-palindrome-strings/
// Language: javascript
// Runtime: 125 ms
// Memory: 46 MB
// Submitted: 2023-07-04

cl = console.log
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
    let n = s.length
    if (n < k) return false

    let ob = {};
    for (let e of s) {
        ob[e] = ob[e] || 0;
        ob[e]++;
    }

    let odds = 0

    for (let v of Object.values(ob)) {
        if (v % 2 === 1)
            odds++
    }

    return k >= odds
};
