// Problem: Largest 1-Bordered Square
// LeetCode: https://leetcode.com/problems/largest-1-bordered-square/
// Language: javascript
// Runtime: 76 ms
// Memory: 44.4 MB
// Submitted: 2023-07-17

var largest1BorderedSquare = function (g) {
    let m = g.length,
        n = g[0].length,
        hor_mat = Array.from({ length: m }, () => new Array(n).fill(0)),
        // horizontal cumulative sum matrix
        ver_mat = Array.from({ length: m }, () => new Array(n).fill(0));
    // vertical   cumulative sum matrix

    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (g[i][j]) {
                hor_mat[i][j] = j == 0 ? 1 : hor_mat[i][j - 1] + 1;
                ver_mat[i][j] = i == 0 ? 1 : ver_mat[i - 1][j] + 1;
            }

    let max = 0;
    for (let i = m - 1; i >= 0; i--)
        for (let j = n - 1; j >= 0; j--)
            for (let sz = Math.min(hor_mat[i][j], ver_mat[i][j]); sz > max; sz--)
                if (
                    ver_mat[i][j - sz + 1] >= sz && //
                    hor_mat[i - sz + 1][j] >= sz
                ) {
                    max = sz;
                    break;
                }
    return max * max;
};
