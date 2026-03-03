// Problem: Reorganize String
// LeetCode: https://leetcode.com/problems/reorganize-string/
// Language: javascript
// Runtime: 1 ms
// Memory: 55.8 MB
// Submitted: 2025-11-29

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    const freq = {};
    for (const ch of s) freq[ch] = (freq[ch] || 0) + 1;

    const n = s.length;
    const maxCount = Math.max(...Object.values(freq));
    if (maxCount > Math.ceil(n / 2)) return '';

    const res = Array(n);
    const chars = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
    let i = 0;

    for (const ch of chars) {
        let count = freq[ch];
        while (count--) {
            if (i >= n) i = 1;
            res[i] = ch;
            i += 2;
        }
    }

    return res.join('');
};
