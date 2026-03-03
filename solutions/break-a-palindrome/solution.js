// Problem: Break a Palindrome
// LeetCode: https://leetcode.com/problems/break-a-palindrome/
// Language: javascript
// Runtime: 67 ms
// Memory: 41.9 MB
// Submitted: 2023-06-29

/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (s) {
    let n = s.length
    if (n === 1) return ""


    for (let i = 0; i < Math.trunc(n/2); i++) {
        if (s[i] !== "a") {
            return s.slice(0, i) + "a" + s.slice(i + 1)
        }
    }

    return s.slice(0, n - 1) + "b"
};
