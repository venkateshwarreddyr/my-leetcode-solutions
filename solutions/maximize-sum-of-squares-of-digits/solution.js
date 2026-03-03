// Problem: Maximize Sum of Squares of Digits
// LeetCode: https://leetcode.com/problems/maximize-sum-of-squares-of-digits/
// Language: javascript
// Runtime: 1 ms
// Memory: 63.2 MB
// Submitted: 2025-12-27

var maxSumOfSquares = function (numOfDigits, sumOfDigits) {
    // If the sum is too large, no solution exists
    if (9 * numOfDigits < sumOfDigits) return '';

    // all 9s,    then remaining as one digit,     all 0s     gets biggest   square sum (9² = 81)

    let res = '';
    // all 9s - Number of '9's we can use
    const ninesCount = Math.floor(sumOfDigits / 9);
    if (ninesCount) res += '9'.repeat(ninesCount);

    // 1 extra number - Remaining sum after using all possible 9s
    const remainder = sumOfDigits % 9;
    if (remainder) res += remainder;

    // remaining 0s
    const zerosCount = numOfDigits - (ninesCount + (remainder ? 1 : 0));
    if (zerosCount) res += '0'.repeat(zerosCount);

    return res;
};

