// Problem: Decode the Slanted Ciphertext
// LeetCode: https://leetcode.com/problems/decode-the-slanted-ciphertext/
// Language: javascript
// Runtime: 308 ms
// Memory: 116.4 MB
// Submitted: 2023-07-04

cl = console.log
/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function (s, rows) {

    let an = ""
    let n = s.length;

    let cols = Math.round(n / rows)

    for (let i = 0; i < cols; i++) {
        let j = i
        while (j < n) {
            an += (s[j])
            j += (cols + 1)
        }
    }

    return an.trimEnd();
};
