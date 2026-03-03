// Problem: Sort the Matrix Diagonally
// LeetCode: https://leetcode.com/problems/sort-the-matrix-diagonally/
// Language: javascript
// Runtime: 99 ms
// Memory: 44.6 MB
// Submitted: 2023-07-15

cl = console.log
var diagonalSort = function (grid) {
    let m = grid.length
    let n = grid[0].length

    for (let g = 0; g < Math.max(m, n); g++) {
        for (let i = 0, j = g; i < m && j < n; i++, j++) {
            for (let k = 0, l = g; k < m && l < n; k++, l++) {
                if (grid[k + 1]?.[l + 1] && grid[k][l] > grid[k + 1][l + 1]) {
                    ([grid[k][l], grid[k + 1][l + 1]] = [grid[k + 1][l + 1], grid[k][l]])
                }
            }
        }

        for (let i = g + 1, j = 0; i < m && j < n; i++, j++) {
            for (let k = g + 1, l = 0; k < m && l < n; k++, l++) {
                if (grid[k + 1]?.[l + 1] && grid[k][l] > grid[k + 1][l + 1]) {
                    ([grid[k][l], grid[k + 1][l + 1]] = [grid[k + 1][l + 1], grid[k][l]])
                }
            }
        }
    }

    return grid;
};

// [
// [1,25,66,1,69,7]
// [23,55,17,45,15,52]
// [75,31,36,44,58,8]
// [22,27,33,25,68,4]
// [84,28,14,11,5,50]
// ]
// [
// [5,17,4,1,52,7]
// [11,11,25,45,8,69]
// [75,23,25,44,58,15]
// [22,27,31,36,50,66]
// [84,28,14,33,55,68]
// ]
// [
// [5,17,4,1,52,7]
// [11,11,25,45,8,69]
// [14,23,25,44,58,15]
// [22,27,31,36,50,66]
// [84,28,75,33,55,68]]

