// Problem: Surface Area of 3D Shapes
// LeetCode: https://leetcode.com/problems/surface-area-of-3d-shapes/
// Language: javascript
// Runtime: 56 ms
// Memory: 42.7 MB
// Submitted: 2023-07-16

var surfaceArea = function (g) {
    let cc = 0, //
        n = g.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (g[i][j]) cc += 2; // up/down

            if (j == 0) cc += g[i][j];
            else if (j > 0) cc += g[i][j] > g[i][j - 1] ? g[i][j] - g[i][j - 1] : 0; // left

            if (i == 0) cc += g[i][j];
            else if (i > 0) cc += g[i][j] > g[i - 1][j] ? g[i][j] - g[i - 1][j] : 0; // back

            if (j == n - 1) cc += g[i][j];
            else if (j < n - 1) cc += g[i][j] > g[i][j + 1] ? g[i][j] - g[i][j + 1] : 0; // right

            if (i == n - 1) cc += g[i][j];
            else if (i < n - 1) cc += g[i][j] > g[i + 1][j] ? g[i][j] - g[i + 1][j] : 0; // front
        }
    }

    return cc;
};
