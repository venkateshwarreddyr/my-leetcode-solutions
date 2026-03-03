// Problem: Number of Increasing Paths in a Grid
// LeetCode: https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/
// Language: javascript
// Runtime: 5566 ms
// Memory: 84.5 MB
// Submitted: 2023-08-21

let mod = 10 ** 9 + 7

let sides = [
    [-1, 0], //   N
    [0, -1], //   W
    [0, 1], //    E
    [1, 0], //    S
];
const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
const getDp = (m, n, d = undefined) => Array.from({ length: m + 1 }, () => new Array(n + 1).fill(d))
var countPaths = function (grid) {

    let m = grid.length;
    let n = grid[0].length;

    let dp = getDp(m, n, 1)
    let indeg = getDp(m, n, 0)

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let [si, sj] of sides) {
                if (!matrixOutOfBounds(i + si, j + sj, m, n)) {
                    if (grid[i + si][j + sj] > grid[i][j]) { indeg[i + si][j + sj]++ }
                }
            }
        }
    }

    let q = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (indeg[i][j] === 0) q.push([i, j])
        }
    }

    let an = 0
    while (q.length) {
        let [i, j] = q.shift()
        indeg[i][j] = -1
        an += dp[i][j]
        an %= mod
        for (let [si, sj] of sides) {
            if (!matrixOutOfBounds(i + si, j + sj, m, n)) {
                if (grid[i + si][j + sj] > grid[i][j]) {
                    indeg[i + si][j + sj]--
                    dp[i + si][j + sj] += dp[i][j]
                    dp[i + si][j + sj] %= mod
                    if (indeg[i + si][j + sj] === 0) {
                        q.push([i + si, j + sj])
                    }
                }
            }
        }

    }

    return an
};
