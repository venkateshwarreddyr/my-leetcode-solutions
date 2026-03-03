// Problem: Multiply Strings
// LeetCode: https://leetcode.com/problems/multiply-strings/
// Language: javascript
// Runtime: 2 ms
// Memory: 56.1 MB
// Submitted: 2025-11-29

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }

    const m = num1.length;
    const n = num2.length;
    const resultArr = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const digit1 = parseInt(num1[i]);
            const digit2 = parseInt(num2[j]);
            const product = digit1 * digit2;

            const p1 = i + j;
            const p2 = i + j + 1;

            let sum = product + resultArr[p2];

            resultArr[p2] = sum % 10;
            resultArr[p1] += Math.floor(sum / 10);
        }
    }

    if (resultArr[0] === 0) {
        resultArr.shift();
    }

    return resultArr.join('');
};
