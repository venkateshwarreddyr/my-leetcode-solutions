// Problem: Modify the Matrix
// LeetCode: https://leetcode.com/problems/modify-the-matrix/
// Language: javascript
// Runtime: 3 ms
// Memory: 60.6 MB
// Submitted: 2025-10-12

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (grid) {
    let m = grid.length
    let n = grid[0].length
    for (let j = 0; j < n; j++) {
        let max = -1
        const queue = []
        for (let i = 0; i < m; i++) {
            if (grid[i][j] === -1) {
                queue.push([i, j])
            } else {
                max = Math.max(max, grid[i][j])
            }
        }

        for(let [x, y] of queue) {
            grid[x][y] = max
        }
    }

    return grid
};
