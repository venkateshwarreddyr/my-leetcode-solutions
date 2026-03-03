// Problem: Best Time to Buy and Sell Stock with Transaction Fee
// LeetCode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
// Language: javascript
// Runtime: 153 ms
// Memory: 86.2 MB
// Submitted: 2023-10-29

cl = console.log
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (a, fee) {

    let n = a.length
    let dp = Array.from({ length: n + 1 }, () => (new Array(2).fill(0)))
    for (let i = n - 1; i > -1; i--) {
        dp[i][0] = Math.max(dp[i + 1][0], -a[i] - fee + dp[i + 1][1])
        dp[i][1] = Math.max(dp[i + 1][1], a[i] + dp[i + 1][0])
    }

    return dp[0][0]
};
