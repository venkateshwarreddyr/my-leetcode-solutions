// Problem: Number of Closed Islands
// LeetCode: https://leetcode.com/problems/number-of-closed-islands/
// Language: javascript
// Runtime: 57 ms
// Memory: 45.1 MB
// Submitted: 2023-07-15

const outOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;

var closedIsland = function (g) {
    let m = g.length,
        n = g[0].length;

    let goodLand;
    const dfs = (i, j) => {
        if (outOfBounds(i, j, m, n)) {
            goodLand = false;
            return;
        }
        if (g[i][j] === -1) return;
        if (g[i][j] === 1) return;

        g[i][j] = -1;

        dfs(i - 1, j) || dfs(i + 1, j) || dfs(i, j - 1) || dfs(i, j + 1);
    };

    let count = 0;
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (g[i][j] === 0) {
                goodLand = true;
                dfs(i, j);
                if (goodLand) count++;
            }
    return count;
};

