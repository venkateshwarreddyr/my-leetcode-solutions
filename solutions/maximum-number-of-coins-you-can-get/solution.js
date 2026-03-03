// Problem: Maximum Number of Coins You Can Get
// LeetCode: https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
// Language: javascript
// Runtime: 217 ms
// Memory: 52.6 MB
// Submitted: 2023-06-24

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
    let cl = console.log
    piles.sort((a, b) => a - b);

    let cc = 0;
    let n = piles.length;
    for (let i = n / 3; i < n; i += 2) {
        cc += piles[i]
    }

    return cc;
};
