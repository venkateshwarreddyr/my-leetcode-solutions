// Problem: Collecting Chocolates
// LeetCode: https://leetcode.com/problems/collecting-chocolates/
// Language: javascript
// Runtime: 202 ms
// Memory: 64 MB
// Submitted: 2025-12-18

var minCost = function (costForType, opCost) {
    let n = costForType.length
    let minCostForType = [...costForType]
    let minTotalCost = _.sum(minCostForType)

    for (let ops = 1; ops <= n - 1; ops++) {
        for (let i = 0; i < n; i++) {
            minCostForType[i] = Math.min(minCostForType[i], costForType[(i + ops) % n])
        }
        minTotalCost = Math.min(minTotalCost, _.sum(minCostForType) + ops * opCost)
    }

    return minTotalCost
};

