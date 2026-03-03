// Problem: Divide Two Integers
// LeetCode: https://leetcode.com/problems/divide-two-integers/
// Language: javascript
// Runtime: 1 ms
// Memory: 56.1 MB
// Submitted: 2025-12-30

var divide = function (n1, n2) {
    let quotient = BigInt(n1) / BigInt(n2);
    if (quotient === BigInt(2 ** 31)) {
        return 2 ** 31 - 1;
    }
    return Number(quotient);
};

