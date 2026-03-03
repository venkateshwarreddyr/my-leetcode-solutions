// Problem: Remove Zeros in Decimal Representation
// LeetCode: https://leetcode.com/problems/remove-zeros-in-decimal-representation/
// Language: javascript
// Runtime: 1 ms
// Memory: 54.9 MB
// Submitted: 2025-10-27

var removeZeros = function (n) {
    return +(('' + n).replaceAll('0', ''))
};

