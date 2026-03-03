// Problem: Convert to Base -2
// LeetCode: https://leetcode.com/problems/convert-to-base-2/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.1 MB
// Submitted: 2025-11-26

var baseNeg2 = function (n) {
    if (n === 0) return '0';
    let result = [];
    while (n) {
        let bit = n & 1;
        result.push(bit);
        n = (n - bit) / -2;
    }
    return result.reverse().join('');
};
