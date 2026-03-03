// Problem: Count Substrings With K-Frequency Characters I
// LeetCode: https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/
// Language: javascript
// Runtime: 6 ms
// Memory: 58.3 MB
// Submitted: 2025-12-02

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfSubstrings = function (s, k) {
    let cc = 0
    let ob = new Map()
    for (let i = 0, j = 0; j < s.length; j++) {
        ob.set(s[j], (ob.get(s[j]) ?? 0) + 1)

        while (ob.get(s[j]) === k) {
            cc += (s.length - j)
            ob.set(s[i], ob.get(s[i]) - 1)
            i++
        }
    }


    return cc
};
