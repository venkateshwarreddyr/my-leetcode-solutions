// Problem: Sum of Two Integers
// LeetCode: https://leetcode.com/problems/sum-of-two-integers/
// Language: javascript
// Runtime: 0 ms
// Memory: 52.9 MB
// Submitted: 2026-01-01

var getSum = function (a, b) {
    while (b) {
        let [sumWithoutCarry, carry] = [a ^ b, (a & b) << 1];
        [a, b] = [sumWithoutCarry, carry];
    }
    return a;
};
