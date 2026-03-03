// Problem: Count Square Submatrices with All Ones
// LeetCode: https://leetcode.com/problems/count-square-submatrices-with-all-ones/
// Language: javascript
// Runtime: 6 ms
// Memory: 57.9 MB
// Submitted: 2025-08-20

var countSquares = function (g) {
    let m = g.length
    let n = g[0].length

    let s = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i && j && g[i][j]) {
                g[i][j] = 1 + Math.min(
                    g[i - 1][j],
                    g[i - 1][j - 1],
                    g[i][j - 1]
                )
            }
            s += g[i][j]
        }
    }
    return s
};
