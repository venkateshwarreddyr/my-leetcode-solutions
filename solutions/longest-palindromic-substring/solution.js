// Problem: Longest Palindromic Substring
// LeetCode: https://leetcode.com/problems/longest-palindromic-substring/
// Language: javascript
// Runtime: 22 ms
// Memory: 58.5 MB
// Submitted: 2025-08-17

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    let ans = ""
    let ansLen = 0
    let n = s.length

    for (let i = 0; i < n; i++) {
        let l = i, r = i
        while (l >= 0 && r < n && s[l] === s[r]) {
            if (r - l + 1 > ansLen) {
                ans = s.slice(l, r + 1)
                ansLen = r - l + 1
            }

            l--
            r++
        }

        l = i, r = i + 1
        while (l >= 0 && r < n && s[l] === s[r]) {
            if (r - l + 1 > ansLen) {
                ans = s.slice(l, r + 1)
                ansLen = r - l + 1
            }
            l--
            r++
        }
    }

    return ans
};
