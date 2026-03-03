// Problem: Count Unguarded Cells in the Grid
// LeetCode: https://leetcode.com/problems/count-unguarded-cells-in-the-grid/
// Language: javascript
// Runtime: 125 ms
// Memory: 87.1 MB
// Submitted: 2025-11-02

const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

var countUnguarded = function (m, n, guards, walls) {
    const g = new Array(m).fill(0).map(() => new Array(n).fill(0));

    walls.forEach(([i, j]) => (g[i][j] = -1));
    guards.forEach(([i, j]) => (g[i][j] = -1));

    guards.forEach(([i, j]) => {
        for (const [dx, dy] of dirs)
            for (
                let ni = i + dx, nj = j + dy; //
                0 <= ni && ni < m && 0 <= nj && nj < n && g[ni][nj] !== -1;
                ni += dx, nj += dy
            )
                g[ni][nj] = 1;
    });

    let cc = 0;
    g.forEach((row) => {
        row.forEach((cell) => {
            cc += cell === 0;
        });
    });
    return cc;
};
