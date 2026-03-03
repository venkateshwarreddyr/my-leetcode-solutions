// Problem: Longest Substring with At Least K Repeating Characters
// LeetCode: https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
// Language: javascript
// Runtime: 5 ms
// Memory: 56.8 MB
// Submitted: 2026-01-02

var longestSubstringLength = function (s, k) {
    const freq = {};
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of s) {
        if (freq[ch] < k) {
            const subStrings = s.split(ch)
            let maxLen = 0;
            for (let subString of subStrings) {
                if (subString) {
                    maxLen = Math.max(maxLen, longestSubstringLength(subString, k));
                }
            }
            return maxLen;
        }
    }

    return s.length;
};

var longestSubstring = function (s, k) {
    return longestSubstringLength(s, k);
};
