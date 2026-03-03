// Problem: Flood Fill
// LeetCode: https://leetcode.com/problems/flood-fill/
// Language: javascript
// Runtime: 69 ms
// Memory: 44.4 MB
// Submitted: 2023-07-16

var floodFill = function (g, r, c, newColor) {
    let m = g.length;
    let n = g[0].length;

    let startColor = g[r][c];

    let dfs = (r, c) => {
        if (g[r][c] == newColor) return;
        g[r][c] = newColor; // visited

        if (c - 1 >= 0 && g[r][c - 1] == startColor) dfs(r, c - 1); // left
        if (r + 1 <= m - 1 && g[r + 1][c] == startColor) dfs(r + 1, c); // top
        if (c + 1 <= n - 1 && g[r][c + 1] == startColor) dfs(r, c + 1); // right
        if (r - 1 >= 0 && g[r - 1][c] == startColor) dfs(r - 1, c); // bottom
    };

    dfs(r, c);

    return g;
};

