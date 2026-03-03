// Problem: Map of Highest Peak
// LeetCode: https://leetcode.com/problems/map-of-highest-peak/
// Language: javascript
// Runtime: 861 ms
// Memory: 132.7 MB
// Submitted: 2023-07-17

const inside_bounds = (i, j, m, n) => i >= 0 && j >= 0 && i < m && j < n; // inside bounds
const dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
];
const inside_bounds_adjs = (i, j, m, n) => {
    let a = dirs //
        .map(([dx, dy]) => [i + dx, j + dy])
        .filter(([ni, nj]) => inside_bounds(ni, nj, m, n));
    return a;
};
// ----------
var highestPeak = function (g) {
    const m = g.length;
    const n = g[0].length;
    const g2 = Array.from({ length: m }, () => Array(n));
    let q = [];
    for (let r = 0; r < m; r++)
        for (let c = 0; c < n; c++)
            if (g[r][c] === 1) {
                g2[r][c] = 0;
                q.push([r, c]);
            }
    while (q.length) {
        let q2 = [];
        for (let [r, c] of q)
            for (let [nr, nc] of inside_bounds_adjs(r, c, m, n))
                if (g2[nr][nc] === undefined) {
                    g2[nr][nc] = g2[r][c] + 1;
                    q2.push([nr, nc]);
                }
        q = q2;
    }
    return g2;
};

