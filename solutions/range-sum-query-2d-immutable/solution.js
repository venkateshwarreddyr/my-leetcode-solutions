// Problem: Range Sum Query 2D - Immutable
// LeetCode: https://leetcode.com/problems/range-sum-query-2d-immutable/
// Language: javascript
// Runtime: 49 ms
// Memory: 79.6 MB
// Submitted: 2025-07-04

cl = console.log
var NumMatrix = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = grid[i][j] -
                (grid[i - 1]?.[j - 1] ?? 0) +
                (grid[i - 1]?.[j] ?? 0) +
                (grid[i][j - 1] ?? 0)
        }
    }

    NumMatrix.prototype.sumRegion = function (r1, c1, r2, c2) {

        return (
            grid[r2][c2] - // right bottom
            (grid[r2][c1 - 1] ?? 0) - // remove left (removes top-left)
            (grid[r1 - 1]?.[c2] ?? 0) + // remove top (removes top-left) 2nd time
            (grid[r1 - 1]?.[c1 - 1] ?? 0) // add top-left
        )
    };

};
/**

 */
