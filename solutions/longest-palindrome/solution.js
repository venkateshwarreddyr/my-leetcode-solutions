// Problem: Longest Palindrome
// LeetCode: https://leetcode.com/problems/longest-palindrome/
// Language: javascript
// Runtime: 53 ms
// Memory: 50.8 MB
// Submitted: 2024-06-04

var longestPalindrome = function (s) {
    let set = new Set();
    let an = 0;
    for (let c of s) {
        if (set.has(c)) {
            an += 2
            set.delete(c)
        } else {
            set.add(c)
        }
    }

    return an + (set.size ? 1 : 0)
};
