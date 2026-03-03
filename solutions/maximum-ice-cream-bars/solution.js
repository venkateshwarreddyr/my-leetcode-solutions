// Problem: Maximum Ice Cream Bars
// LeetCode: https://leetcode.com/problems/maximum-ice-cream-bars/
// Language: javascript
// Runtime: 242 ms
// Memory: 55.7 MB
// Submitted: 2023-07-08

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    costs.sort((a, b) => a - b)

    let cc = 0
    for (let cost of costs) {
        if (cost > coins) {
            break;
        } else {
            cc++
            coins -= cost
        }
    }

    return cc
};
