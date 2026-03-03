// Problem: Find Minimum Log Transportation Cost
// LeetCode: https://leetcode.com/problems/find-minimum-log-transportation-cost/
// Language: javascript
// Runtime: 0 ms
// Memory: 55.3 MB
// Submitted: 2025-10-12

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minCuttingCost = function (log1_size, log2_size, truck_size) {
    let cost = 0
    while (log1_size > truck_size) {
        cost += truck_size * (log1_size - truck_size)
        log1_size = log1_size - truck_size
    }
    while (log2_size > truck_size) {
        cost += truck_size * (log2_size - truck_size)
        log2_size = log2_size - truck_size
    }
    return cost
};
