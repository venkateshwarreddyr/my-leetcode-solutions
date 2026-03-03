// Problem: Island Perimeter
// LeetCode: https://leetcode.com/problems/island-perimeter/
// Language: javascript
// Runtime: 138 ms
// Memory: 50.6 MB
// Submitted: 2023-07-15

var islandPerimeter = function (g) {
    let m = g.length;
    let n = g[0].length;

    let peri = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (g[i][j] == 1) {
                if (j == 0 || g[i][j - 1] == 0) peri++; // left
                if (j == n - 1 || g[i][j + 1] == 0) peri++; // right
                if (i == 0 || g[i - 1][j] == 0) peri++; // top
                if (i == m - 1 || g[i + 1][j] == 0) peri++; // bottom
            }
        }
    }

    return peri;
};
