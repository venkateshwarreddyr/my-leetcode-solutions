// Problem: Matrix Diagonal Sum
// LeetCode: https://leetcode.com/problems/matrix-diagonal-sum/
// Language: javascript
// Runtime: 57 ms
// Memory: 42.9 MB
// Submitted: 2023-07-15

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (grid) {
    let m = grid.length
    let n = grid[0].length

    let an = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j || i + j === m - 1) {
                an += grid[i][j]
            }
        }
    }

    return an;
};
