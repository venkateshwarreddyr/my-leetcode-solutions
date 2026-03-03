// Problem: Fill a Special Grid
// LeetCode: https://leetcode.com/problems/fill-a-special-grid/
// Language: javascript
// Runtime: 22 ms
// Memory: 105.5 MB
// Submitted: 2025-10-29

var specialGrid = function (N) {
    if (N === 0) return [[0]]; // given

    let g = specialGrid(N - 1); // is an exponent (p), of another number 2^p
    let m = g.length; // 1 initially
    let n = g[0].length; // same as n

    const ng = Array.from({ length: 2 * m }, () => new Array(2 * n)); // new bigger grid
    // g will be topRight (TR), need to build bottomRight,bottomLeft,TopLeft
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ng[i][n + j]        = g[i][j] + 0 * m * n; // TR
            ng[m + i][n + j]    = g[i][j] + 1 * m * n; // BR
            ng[m + i][j]        = g[i][j] + 2 * m * n; // BL
            ng[i][j]            = g[i][j] + 3 * m * n; // TL
        }
    }
    return ng;
};

