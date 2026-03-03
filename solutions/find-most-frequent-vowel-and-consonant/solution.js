// Problem: Find Most Frequent Vowel and Consonant
// LeetCode: https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/
// Language: javascript
// Runtime: 2 ms
// Memory: 56.2 MB
// Submitted: 2025-10-20

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    var vowel = Array(26).fill(0);
    var cons = Array(26).fill(0);

    for (var ch of s) {
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') vowel[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            else cons[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

    var max1 = 0, max2 = 0;
    for (var i = 0; i < 26; i++) {
        if (vowel[i] > max1) max1 = vowel[i];
        if (cons[i] > max2) max2 = cons[i];
    }

    return max1 + max2;
};
