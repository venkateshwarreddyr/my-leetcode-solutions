// Problem: Coin Change II
// LeetCode: https://leetcode.com/problems/coin-change-ii/
// Language: javascript
// Runtime: 10 ms
// Memory: 57.6 MB
// Submitted: 2025-07-31

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = dp[i] + dp[i - coin]
        }
    }

    return dp[amount]
};

