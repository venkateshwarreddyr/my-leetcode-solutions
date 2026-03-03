// Problem: Surrounded Regions
// LeetCode: https://leetcode.com/problems/surrounded-regions/
// Language: javascript
// Runtime: 100 ms
// Memory: 46.8 MB
// Submitted: 2023-07-17

const insideBounds_andOfVal = (r, c, m, n, g, ch) =>
    r >= 0 && r < m && c >= 0 && c < n && g[r][c] === ch;

var solve = function (g) {
    let m = g.length;
    let n = g[0].length;

    const dfs = (i, j) => {
        if (!insideBounds_andOfVal(i, j, m, n, g, "O")) return;

        g[i][j] = "S";

        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    };

    // SAVE O reachable from edges (Change: 'O'->'S')
    for (let i = 0; i < m; i++) {
        dfs(i, 0);
        dfs(i, n - 1);
    }
    for (let j = 0; j < n; j++) {
        dfs(0, j);
        dfs(m - 1, j);
    }

    // REMOVE other Os (Change: 'O'->'X')
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (g[i][j] === "O") {
                g[i][j] = "X";
            }

    // RETRIEVE saved Os (Change: 'S'->'O')
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (g[i][j] === "S") {
                g[i][j] = "O";
            }

    return g;
};
