// Problem: Find the Encrypted String
// LeetCode: https://leetcode.com/problems/find-the-encrypted-string/
// Language: javascript
// Runtime: 55 ms
// Memory: 52.1 MB
// Submitted: 2024-08-21

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    let n = s.length
    let an = ''

    for(let i = 0; i<n;i++) {
        an+=s[(i+k)%n]
    }

    return an
};
