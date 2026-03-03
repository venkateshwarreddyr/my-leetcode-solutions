// Problem: Two City Scheduling
// LeetCode: https://leetcode.com/problems/two-city-scheduling/
// Language: javascript
// Runtime: 0 ms
// Memory: 55 MB
// Submitted: 2025-11-04

function twoCitySchedCost(costs) {
    costs.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
    let n = costs.length / 2;
    let total = 0;

    for (let i = 0; i < n; i++) total += costs[i][1];
    for (let i = n; i < costs.length; i++) total += costs[i][0];

    return total;
}
