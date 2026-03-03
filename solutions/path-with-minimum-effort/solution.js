// Problem: Path With Minimum Effort
// LeetCode: https://leetcode.com/problems/path-with-minimum-effort/
// Language: javascript
// Runtime: 3826 ms
// Memory: 92.8 MB
// Submitted: 2023-07-16

const inb = (i, j, m, n) => i >= 0 && j >= 0 && i < m && j < n; // in bounds
const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1],];

const valid_adjs = (i, j, m, n) => {
    let a = dirs //
        .map(([dx, dy]) => [i + dx, j + dy])
        .filter(([ni, nj]) => inb(ni, nj, m, n));
    return a;
};

var minimumEffortPath = function (g) {
    let m = g.length;
    let n = g[0].length;

    let g2 = Array.from({ length: m }, () => Array(n).fill(Infinity));
    g2[0][0] = 0;

    function dfs(i, j, pi, pj, maxInPath) {
        for (let [ni, nj] of valid_adjs(i, j, m, n)) {

            if (!(ni === pi && nj === pj)) {
                let abs1 = Math.abs(g[ni][nj] - g[i][j]);
                let newMax = Math.max(maxInPath, abs1);

                if (
                    newMax < g2[m - 1][n - 1] &&
                    newMax < g2[ni][nj]
                ) {
                    g2[ni][nj] = newMax;
                    dfs(ni, nj, i, j, g2[ni][nj]);
                }
            }
        }
    }

    dfs(0, 0, -1, -1, -Infinity);
    return g2[m - 1][n - 1];
};
