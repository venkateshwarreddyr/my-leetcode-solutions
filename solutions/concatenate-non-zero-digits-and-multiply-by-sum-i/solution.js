// Problem: Concatenate Non-Zero Digits and Multiply by Sum I
// LeetCode: https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-i/
// Language: javascript
// Runtime: 1 ms
// Memory: 55.2 MB
// Submitted: 2025-11-23

/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
    let sum = 0;
    let digit = "";

    for (let c of n.toString()) {
        if (c === "0") continue;
        sum += Number(c);
        digit += c;
    }

    return Number(digit) * sum;
};

