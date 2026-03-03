// Problem: Binary Number with Alternating Bits
// LeetCode: https://leetcode.com/problems/binary-number-with-alternating-bits/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.1 MB
// Submitted: 2026-02-18

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    let countOnesInBits = (n) => {
        let prev = n & 1;
        n = n >> 1;
        while (n != 0) {
            let ones = n & 1
            if (prev == ones) {
                return false;
            } else {
                prev = ones;
                n = n >> 1;
            }
        }
        return true
    }
    return countOnesInBits(n);

};
