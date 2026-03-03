// Problem: Maximum Non Negative Product in a Matrix
// LeetCode: https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/
// Language: javascript
// Runtime: 59 ms
// Memory: 45.8 MB
// Submitted: 2023-08-24

cl = console.log
MOD = 10 ** 9 + 7
let sides = [
    // [-1, 0], //   N
    // [0, -1], //   W
    [0, 1], //    E
    [1, 0], //    S
];
const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
var maxProductPath = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let vis = Array.from({ length: m }, () => new Array(n))
    const dfs = (i, j) => {
        if (i === m - 1 && j === n - 1) return [grid[i][j], grid[i][j]]
        // logic here
        if (vis[i][j]) return vis[i][j]
        let max = -Infinity
        let min = Infinity
        for (let [si, sj] of sides) {
            if (!matrixOutOfBounds(i + si, j + sj, m, n)) {
                let a = dfs(i + si, j + sj)
                for (let e of a) {
                    max = Math.max(max, grid[i][j] * e);
                    min = Math.min(min, grid[i][j] * e)
                }
            }
        }
        vis[i][j] = [max, min]

        return vis[i][j]
    };

    let [an] = dfs(0, 0)
    if (an >= 0) return an % MOD
    return -1
};

/**
[
[-1,-4,2],
[4,3,-1],
[2,-4,4],
[1,-1,-4]
]


 */
