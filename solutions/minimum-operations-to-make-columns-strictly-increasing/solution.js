// Problem: Minimum Operations to Make Columns Strictly Increasing
// LeetCode: https://leetcode.com/problems/minimum-operations-to-make-columns-strictly-increasing/
// Language: javascript
// Runtime: 1 ms
// Memory: 51.4 MB
// Submitted: 2024-12-29

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function (grid) {
    let an = 0
    let m = grid.length
    let n = grid[0].length
    for (let j = 0; j < n; j++) {
        for (let i = 1; i < m; i++) {
            if (grid[i - 1][j] >= grid[i][j]) {
                an += (grid[i - 1][j] - grid[i][j] + 1)
                grid[i][j] = grid[i - 1][j] + 1
            }
        }
    }

    return an
};
