// Problem: License Key Formatting
// LeetCode: https://leetcode.com/problems/license-key-formatting/
// Language: javascript
// Runtime: 68 ms
// Memory: 46.9 MB
// Submitted: 2023-05-30

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    s = s.toUpperCase().replaceAll('-', '')
    let n = s.length;
    let g = ''
    let an = ''
    for (let i = n - 1; i > -1; i--) {
        g = s[i] + g
        if (g.length === k && i !== 0) {
            an = '-' + g + an
            g = ''
        }
    }
    an = g + an

    return an;
};
