// Problem: Minimum Number of Flips to Reverse Binary String
// LeetCode: https://leetcode.com/problems/minimum-number-of-flips-to-reverse-binary-string/
// Language: javascript
// Runtime: 0 ms
// Memory: 58.3 MB
// Submitted: 2025-11-23

/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function (n) {
    let s = n.toString(2)

    let cc = 0

    for (let i = 0; i < s.length / 2; i++) {
        let j = s.length - i - 1

        if (s[i] !== s[j]) cc += 2
    }

    return cc
};
