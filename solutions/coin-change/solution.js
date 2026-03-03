// Problem: Coin Change
// LeetCode: https://leetcode.com/problems/coin-change/
// Language: javascript
// Runtime: 23 ms
// Memory: 59.8 MB
// Submitted: 2026-01-01

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], 1 + dp[i - coin])
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
};
