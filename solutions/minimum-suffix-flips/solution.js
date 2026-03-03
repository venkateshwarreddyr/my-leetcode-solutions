// Problem: Minimum Suffix Flips
// LeetCode: https://leetcode.com/problems/minimum-suffix-flips/
// Language: javascript
// Runtime: 63 ms
// Memory: 43.9 MB
// Submitted: 2023-06-29

/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (s) {
    let n = s.length;
    let c = 0;
    let last = "0"

    for (let i = 0; i < n; i++) {
        if (s[i] !== last) {
            last = s[i]
            c++
        }
    }

    return c
};
/*
00000
00111
11000
10111

001011101

*/
