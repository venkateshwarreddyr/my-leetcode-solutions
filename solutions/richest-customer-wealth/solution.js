// Problem: Richest Customer Wealth
// LeetCode: https://leetcode.com/problems/richest-customer-wealth/
// Language: javascript
// Runtime: 56 ms
// Memory: 42.4 MB
// Submitted: 2023-07-15

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = -Infinity;
    for (let account of accounts) {
        let sum = account.reduce((a, c) => a + c, 0);
        if (sum > max) max = sum;
    }
    return max;
};
