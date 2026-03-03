// Problem: Flip Square Submatrix Vertically
// LeetCode: https://leetcode.com/problems/flip-square-submatrix-vertically/
// Language: javascript
// Runtime: 4 ms
// Memory: 65 MB
// Submitted: 2025-10-12

var reverseSubmatrix = function (grid, x, y, k) {
    const m = grid.length;
    const n = grid[0].length;

    // mxn buffer
    const newGrid = Array.from({ length: m }, (_, i) => grid[i].slice());
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < k; j++) {
            newGrid[x + i][y + j] = grid[x + k - 1 - i][y + j];
        }
    }
    return newGrid;
};
