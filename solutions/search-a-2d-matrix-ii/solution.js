// Problem: Search a 2D Matrix II
// LeetCode: https://leetcode.com/problems/search-a-2d-matrix-ii/
// Language: javascript
// Runtime: 1309 ms
// Memory: 45.6 MB
// Submitted: 2023-08-24

const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;

var searchMatrix = function (grid, tar) {

    let m = grid.length;
    let n = grid[0].length;

    let i = 0, j = n - 1

    while (!matrixOutOfBounds(i, j, m, n)) {
        if (grid[i][j] === tar) return true
        if (grid[i][j] > tar) j--
        if (grid[i][j] < tar) i++
    }


    return false
};
