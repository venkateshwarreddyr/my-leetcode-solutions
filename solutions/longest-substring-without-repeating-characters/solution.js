// Problem: Longest Substring Without Repeating Characters
// LeetCode: https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Language: javascript
// Runtime: 10 ms
// Memory: 58 MB
// Submitted: 2025-08-16

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let counter = new Set()
    let i = 0, j = 0;
    let max = 0
    while (j < s.length) {
        if (counter.has(s[j])) {
            counter.delete(s[i])
            i++
        } else {
            counter.add(s[j])
            j++
        }
        max = Math.max(max, j - i)
    }

    return max
};
