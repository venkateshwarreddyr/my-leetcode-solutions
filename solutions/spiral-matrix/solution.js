// Problem: Spiral Matrix
// LeetCode: https://leetcode.com/problems/spiral-matrix/
// Language: javascript
// Runtime: 55 ms
// Memory: 41.3 MB
// Submitted: 2023-07-17

var spiralOrder = function (mat) {
    if (!mat.length) return [];


    let m = mat.length;
    let n = mat[0].length;
    let ec = m * n;

    let res = [];

    let i = 0,
        j = 0;
    for (let d = 0; d <= Math.trunc(m / 2); d++) {
        if (i < m) {
            for (; j + d < n; j++)         res.push(mat[i][j]);
            if (res.length == ec) break;
        }

        if (j + d == n) j--;
        i++;
        if (j < n) {
            for (; i + d < m; i++)         res.push(mat[i][j]);
            if (res.length == ec) break;
        }

        if (i + d == m) i--;
        j--;
        if (i >= 0) {
            for (; j - d >= 0; j--)         res.push(mat[i][j]);
            if (res.length == ec) break;
        }

        if (j - d == -1) j++;
        i--;
        if (j >= 0) {
            for (; i - 1 - d >= 0; i--)     res.push(mat[i][j]);
            if (res.length == ec) break;
        }

        i++;
        j++;
    }

    return res;
};
