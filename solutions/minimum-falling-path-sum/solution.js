// Problem: Minimum Falling Path Sum
// LeetCode: https://leetcode.com/problems/minimum-falling-path-sum/
// Language: javascript
// Runtime: 84 ms
// Memory: 46.7 MB
// Submitted: 2023-07-20

cl = console.log
var minFallingPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    let sides = [
        [1, 0],
        [1, -1],
        [1, 1],
    ];
    const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;

    for (let i = m - 2; i > -1; i--) {
        for (let j = 0; j < n; j++) {
            let min = Infinity
            for (let [x, y] of sides) {
                if (!matrixOutOfBounds(i + x, j + y, m, n)) {
                    min = Math.min(min, grid[i + x][j + y])
                }
            }
            grid[i][j] += min
        }
    }

    return Math.min(...grid[0])
};
