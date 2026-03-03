// Problem: Shift 2D Grid
// LeetCode: https://leetcode.com/problems/shift-2d-grid/
// Language: javascript
// Runtime: 100 ms
// Memory: 46.7 MB
// Submitted: 2023-07-15

var shiftGrid = function (g, k) {
    let m = g.length;
    let n = g[0].length;

    // STEP 1 - no rotate
    k = k % (n * m); // gives same matrix
    if (k === 0) {
        return g;
    }

    // STEP 2 - rotate minimal - rows only
    let totalFlips = Math.trunc(k / n);
    k = k - totalFlips * n;
    while (totalFlips--) {
        let lastRow = g[m - 1];
        for (let i = m - 1; i > 0; i--) {
            g[i] = g[i - 1];
        }
        g[0] = lastRow;
    }

    // STEP 3 - rotate minimal - rows & cols only
    while (k--) {
        // fix last column
        let temp = g[m - 1][n - 1]; // 9
        for (let i = m - 1; i > 0; i--) {
            g[i][n - 1] = g[i - 1][n - 1];
        }
        g[0][n - 1] = temp;

        // fix all rows - circulate once
        for (let i = 0; i < m; i++) {
            let temp = g[i][n - 1]; // 9
            for (let j = n - 1; j > 0; j--) {
                g[i][j] = g[i][j - 1];
            }
            g[i][0] = temp;
        }
    }

    return g;
};

