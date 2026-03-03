// Problem: Maximum Number of Points with Cost
// LeetCode: https://leetcode.com/problems/maximum-number-of-points-with-cost/
// Language: javascript
// Runtime: 49 ms
// Memory: 78.7 MB
// Submitted: 2025-08-24

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxPoints = function (grid) {
    const n = grid[0].length;
    let prev = new Array(n).fill(0);

    for (const row of grid) {
        let max = 0;

        for (let j = 0; j < n; ++j) {
            max = Math.max(max - 1, prev[j]);
            prev[j] = max;
        }

        max = 0;
        for (let j = n - 1; j >= 0; --j) {
            max = Math.max(max - 1, prev[j]);
            prev[j] = Math.max(prev[j], max) + row[j];
        }
    }

    let maxPoints = 0;
    for (let j = 0; j < n; ++j) {
        maxPoints = Math.max(maxPoints, prev[j]);
    }

    return maxPoints;
};
/**
[ [ 1, 2, 3 ], [ 2, 7, 4 ], [ 5, 4, 5 ] ]

 */
