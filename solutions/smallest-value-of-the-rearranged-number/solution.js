// Problem: Smallest Value of the Rearranged Number
// LeetCode: https://leetcode.com/problems/smallest-value-of-the-rearranged-number/
// Language: javascript
// Runtime: 1 ms
// Memory: 57.5 MB
// Submitted: 2026-01-17

var smallestNumber = function (num) {
    // 0
    if (num === 0) return 0;

    const isNegative = num < 0;
    const digits = ('' + Math.abs(num)).split('');

    // -ve
    if (isNegative) {
        digits.sort((a, b) => b - a); // - largest abs val, if -ve
        return -digits.join('');
    }

    // +ve
    digits.sort((a, b) => a - b); // smallest val
    if (digits[0] !== '0') {
        return +digits.join(''); // smallest val
    }

    let firstNonZeroValIndex = 0;
    while (firstNonZeroValIndex < digits.length && digits[firstNonZeroValIndex] === '0') {
        firstNonZeroValIndex++;
    }
    //     [0, 0, 5, 7]
    //  => [5, 0, 0, 7];
    [digits[0], digits[firstNonZeroValIndex]] = [digits[firstNonZeroValIndex], digits[0]];
    return +digits.join('');
};

