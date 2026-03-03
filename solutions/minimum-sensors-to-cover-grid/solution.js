// Problem: Minimum Sensors to Cover Grid
// LeetCode: https://leetcode.com/problems/minimum-sensors-to-cover-grid/
// Language: javascript
// Runtime: 0 ms
// Memory: 56.2 MB
// Submitted: 2025-11-04

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minSensors = function (n, m, k) {
    const k_coverage = 2 * k + 1;

    const row_coverage = Math.ceil(n / k_coverage);
    const col_coverage = Math.ceil(m / k_coverage);

    return row_coverage * col_coverage;
};
