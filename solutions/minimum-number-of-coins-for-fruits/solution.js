// Problem: Minimum Number of Coins for Fruits
// LeetCode: https://leetcode.com/problems/minimum-number-of-coins-for-fruits/
// Language: javascript
// Runtime: 1254 ms
// Memory: 183.9 MB
// Submitted: 2023-11-25

/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function(prices) {
    let an = Infinity
    let n = prices.length
    let memo = {}
    function fn (i, free) {
        let x = `${i}, ${free}`
        if( i === n) {
            return 0;
        }
        if (memo[x] !== undefined) return memo[x]
        if(free === 0) {
            return memo[x] = prices[i] + fn(i + 1, i+1)
        } else {
            // buy
            
            return memo[x] = Math.min(
                prices[i] + fn(i + 1, i+1),
                fn(i + 1, free - 1)
            )
            
        }
    }
    
    return fn(0, 0)
};
