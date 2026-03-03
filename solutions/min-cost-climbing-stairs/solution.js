// Problem: Min Cost Climbing Stairs
// LeetCode: https://leetcode.com/problems/min-cost-climbing-stairs/
// Language: javascript
// Runtime: 0 ms
// Memory: 52.8 MB
// Submitted: 2025-07-31

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let n = cost.length

    let minCostPrev = cost[0]
    let minCostCurr = cost[1]

    for (let i = 2; i < n; i++) {
        let minCostNext = cost[i] + Math.min(minCostPrev, minCostCurr)

        minCostPrev = minCostCurr
        minCostCurr = minCostNext
    }

    return Math.min(minCostPrev, minCostCurr)
};
