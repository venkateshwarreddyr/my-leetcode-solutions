// Problem: Bitwise OR of Even Numbers in an Array
// LeetCode: https://leetcode.com/problems/bitwise-or-of-even-numbers-in-an-array/
// Language: javascript
// Runtime: 0 ms
// Memory: 57.6 MB
// Submitted: 2025-10-12

var evenNumberBitwiseORs = function (a) {
    let xor = 0
    for (let x of a) {
        if (!(x & 1)) {
            xor |= x
        }
    }
    return xor
};
