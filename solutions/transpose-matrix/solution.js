// Problem: Transpose Matrix
// LeetCode: https://leetcode.com/problems/transpose-matrix/
// Language: javascript
// Runtime: 66 ms
// Memory: 44.9 MB
// Submitted: 2023-05-25

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (grid) {
    let m = grid.length
    let n = grid[0].length


    let ngrid = [...new Array(n)].map(() => new Array(m));

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            ngrid[j][i] = grid[i][j]
        }
    }

    return ngrid
};
