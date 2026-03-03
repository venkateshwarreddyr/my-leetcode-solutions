// Problem: Longest Increasing Path in a Matrix
// LeetCode: https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
// Language: javascript
// Runtime: 82 ms
// Memory: 46.7 MB
// Submitted: 2023-07-31

cl = console.log
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    let maxcc = 0
    let sides = [
        [-1, 0], //   N
        [0, -1], //   W
        [0, 1], //    E
        [1, 0], //    S
    ];
    const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
    let memo = Array.from({ length: m }, () => new Array(n))

    function dfs(ii, jj) {
        if (memo[ii][jj] !== undefined) {
            return memo[ii][jj]
        }

        let max = 0
        for (let [si, sj] of sides) {
            if (!matrixOutOfBounds(ii + si, jj + sj, m, n)) {
                if (grid[ii + si][jj + sj] > grid[ii][jj]) {
                    max = Math.max(max, 1 + dfs(ii + si, jj + sj));
                }
            }
        }

        memo[ii][jj] = max
        return max
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            maxcc = Math.max(maxcc, 1 + dfs(i, j))
        }
    };

    return maxcc
};
