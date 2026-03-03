// Problem: Coloring A Border
// LeetCode: https://leetcode.com/problems/coloring-a-border/
// Language: javascript
// Runtime: 107 ms
// Memory: 48.1 MB
// Submitted: 2023-07-17

const inside_bounds = (i, j, m, n) => i >= 0 && j >= 0 && i < m && j < n; // inside bounds

const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];

const inside_bounds_adjs = (i, j, m, n) => {
    let a = dirs //
        .map(([dx, dy]) => [i + dx, j + dy])
        .filter(([ni, nj]) => inside_bounds(ni, nj, m, n));
    return a;
};

var colorBorder = function (g, rs, cs, newcolor) {
    const m = g.length;
    const n = g[0].length;
    const g2 = Array.from({ length: m }, () => Array(n));

    let colorS = g[rs][cs];
    function dfs(r, c) {
        g2[r][c] = newcolor;
        let colorScount = 0;
        for (let [r2, c2] of inside_bounds_adjs(r, c, m, n))
            if (g[r2][c2] === colorS) {
                colorScount++;
                if (g2[r2][c2] === undefined) {
                    dfs(r2, c2);
                }
            }
        if (colorScount === 4) g2[r][c] = g[r][c];
    }
    dfs(rs, cs);

    for (let r = 0; r < m; r++)
        for (let c = 0; c < n; c++)
            if (g2[r][c] !== undefined) {
                g[r][c] = g2[r][c];
            }
    return g;
};
