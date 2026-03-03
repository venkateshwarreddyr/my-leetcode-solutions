// Problem: Climbing Stairs II
// LeetCode: https://leetcode.com/problems/climbing-stairs-ii/
// Language: javascript
// Runtime: 4 ms
// Memory: 70.5 MB
// Submitted: 2025-11-11

/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function (n, costs) {
    let cost1 = 0;
    let cost2 = 0;
    let cost3 = 0;
    for (let i = 0; i < costs.length; i++) {
        let currCost = costs[i];
        const minTravelCost = Math.min(
            cost1 + 1,
            cost2 + 4,
            cost3 + 9,
        );
        currCost += minTravelCost;
        cost3 = cost2;
        cost2 = cost1;
        cost1 = currCost;
    }
    return cost1;
};
