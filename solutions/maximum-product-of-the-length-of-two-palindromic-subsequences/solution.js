// Problem: Maximum Product of the Length of Two Palindromic Subsequences
// LeetCode: https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/
// Language: javascript
// Runtime: 99 ms
// Memory: 59.8 MB
// Submitted: 2025-11-19

/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function (s) {
    const n = s.length;
    const palindromeLen = new Map();

    const isPalindrome = str => str === [...str].reverse().join('');

    for (let mask = 1; mask < 1 << n; mask++) {
        let sub = '';
        for (let i = 0; i < n; i++) if (mask & (1 << i)) sub += s[i];
        if (isPalindrome(sub)) palindromeLen.set(mask, sub.length);
    }

    let result = 0;
    const masks = [...palindromeLen.keys()];
    for (let i = 0; i < masks.length; i++) {
        for (let j = i + 1; j < masks.length; j++) {
            if ((masks[i] & masks[j]) === 0)
                result = Math.max(result, palindromeLen.get(masks[i]) * palindromeLen.get(masks[j]));
        }
    }

    return result;
};
