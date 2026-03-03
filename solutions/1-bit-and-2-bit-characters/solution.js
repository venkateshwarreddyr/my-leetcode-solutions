// Problem: 1-bit and 2-bit Characters
// LeetCode: https://leetcode.com/problems/1-bit-and-2-bit-characters/
// Language: javascript
// Runtime: 0 ms
// Memory: 55.3 MB
// Submitted: 2025-11-18

cl = console.log
var isOneBitCharacter = function (bits) {
    bits.pop()
    bits = bits.join("")

    bits = bits.replaceAll("11", "")
    bits = bits.replaceAll("10", "")
    bits = bits.replaceAll("0", "")

    return !bits
};
