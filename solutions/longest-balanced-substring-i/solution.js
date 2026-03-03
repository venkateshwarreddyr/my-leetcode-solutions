// Problem: Longest Balanced Substring I
// LeetCode: https://leetcode.com/problems/longest-balanced-substring-i/
// Language: javascript
// Runtime: 1213 ms
// Memory: 62.6 MB
// Submitted: 2026-02-12

/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function (s) {
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        const freqMap = new Map();

        for (let j = i; j < s.length; j++) {
            const char = s[j];
            freqMap.set(char, (freqMap.get(char) || 0) + 1);

            const counts = [...freqMap.values()];
            const uniqueCounts = new Set(counts);

            if (uniqueCounts.size === 1) {
                max = Math.max(max, j - i + 1);
            }
        }
    }

    return max;
};

