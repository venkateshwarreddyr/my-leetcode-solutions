// Problem: Number of Enclaves
// LeetCode: https://leetcode.com/problems/number-of-enclaves/
// Language: javascript
// Runtime: 105 ms
// Memory: 52.4 MB
// Submitted: 2023-07-16

var numEnclaves = function (g) {
    let m = g.length;
    let n = g[0].length;

    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || !g[i][j]) return;

        g[i][j] = 0;

        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    };

    for (let i = 0; i < m; i++) {
        dfs(i, 0);
        dfs(i, n - 1);
    }
    for (let j = 0; j < n; j++) {
        dfs(0, j);
        dfs(m - 1, j);
    }

    let count = 0;
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (g[i][j]) {
                count++;
            }
    return count;
};
