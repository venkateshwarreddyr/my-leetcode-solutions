// Problem: Best Time to Buy and Sell Stock with Cooldown
// LeetCode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.5 MB
// Submitted: 2025-11-29

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	const n = prices.length;
	if (n <= 1) return 0;

	const hold = Array(n).fill(0);
	const sold = Array(n).fill(0);
	const rest = Array(n).fill(0);

	hold[0] = -prices[0];

	for (let i = 1; i < n; i++) {
		hold[i] = Math.max(hold[i - 1], rest[i - 1] - prices[i]);
		sold[i] = hold[i - 1] + prices[i];
		rest[i] = Math.max(rest[i - 1], sold[i - 1]);
	}

	return Math.max(sold[n - 1], rest[n - 1]);
};
