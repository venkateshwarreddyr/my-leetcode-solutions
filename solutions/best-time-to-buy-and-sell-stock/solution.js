// Problem: Best Time to Buy and Sell Stock
// LeetCode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Language: javascript
// Runtime: 3 ms
// Memory: 65.6 MB
// Submitted: 2025-11-27

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (a) {
    let maxProfit = 0
    let n = a.length
    let min = a[0]

    for (let i = 1; i < n; i++) {
        if (min > a[i]) {
            min = a[i]
        }
        maxProfit = Math.max(maxProfit, a[i] - min)
    }

    return maxProfit
};
