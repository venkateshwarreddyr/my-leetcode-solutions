// Problem: Largest Submatrix With Rearrangements
// LeetCode: https://leetcode.com/problems/largest-submatrix-with-rearrangements/
// Language: javascript
// Runtime: 129 ms
// Memory: 67.7 MB
// Submitted: 2024-05-31

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function (grid) {
    let m = grid.length
    let n = grid[0].length
    let max = 0
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                grid[i][j] += (grid[i - 1][j])
            }
        }
    }
    for (let i = 0; i < m; i++) {
        grid[i].sort((a, b) => b - a)
        for (let j = 0; j < n; j++) {
            max = Math.max(grid[i][j] * (j + 1), max)
        }
    }

    return max
};

/**
    0,0,1
    1,2,3
    1,0,1

    0,0,1
    1,1,2
    2,0,3

    2,3,0
 */
