// Problem: Best Time to Buy and Sell Stock II
// LeetCode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.8 MB
// Submitted: 2025-08-23

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (a) {
    let profit = 0
    let n = a.length

    for (let i = 1; i < n; i++) {
        if (a[i] > a[i - 1]) {
            profit += (a[i] - a[i - 1])
        }
    }

    return profit
};
