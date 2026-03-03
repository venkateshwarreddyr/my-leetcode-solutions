// Problem: Final Prices With a Special Discount in a Shop
// LeetCode: https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
// Language: javascript
// Runtime: 77 ms
// Memory: 48.8 MB
// Submitted: 2023-05-10

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let n = prices.length;
    
    for(let i=0; i<n; i++){
        prices[i] = prices[i] - (prices.slice(i+1).find(e => e<=prices[i]) || 0)
    }
    
    return prices;
};
