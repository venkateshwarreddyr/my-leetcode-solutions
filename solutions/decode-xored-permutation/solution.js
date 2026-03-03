// Problem: Decode XORed Permutation
// LeetCode: https://leetcode.com/problems/decode-xored-permutation/
// Language: javascript
// Runtime: 282 ms
// Memory: 76.1 MB
// Submitted: 2023-07-19

/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function (a) {
    let n = a.length + 1
    let x = 0
    for (let i = 1; i <= n; i++) x ^= i

    for (let i = 1; i < n - 1; i += 2) x ^= a[i]
    let an = [x]

    for (let e of a) {
        an.push(an[an.length - 1] ^ e)
    }

    return an;
};
