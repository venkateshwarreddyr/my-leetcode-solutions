// Problem: Next Greater Element III
// LeetCode: https://leetcode.com/problems/next-greater-element-iii/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.8 MB
// Submitted: 2026-01-03

var nextGreaterElement = function (num) {
    const MAX_32_BIT_INT = 2147483647;

    let digits = ('' + num).split('');
    let n = digits.length;

    let pivotIndex = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (digits[i] < digits[i + 1]) {
            pivotIndex = i;
            break;
        }
    }
    if (pivotIndex === -1) return -1;

    let successorIndex = -1;
    for (let i = n - 1; i > pivotIndex; i--) {
        if (digits[i] > digits[pivotIndex]) {
            successorIndex = i;
            break;
        }
    }
    [digits[pivotIndex], digits[successorIndex]] = [digits[successorIndex], digits[pivotIndex]];

    let leftPart = digits.slice(0, pivotIndex + 1);
    let rightPart = digits.slice(pivotIndex + 1);
    rightPart.sort((a, b) => a - b);

    let nextN = +leftPart.concat(rightPart).join('');
    return (nextN > MAX_32_BIT_INT) ? -1 : nextN
};

