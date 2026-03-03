// Problem: Increment Submatrices by One
// LeetCode: https://leetcode.com/problems/increment-submatrices-by-one/
// Language: javascript
// Runtime: 34 ms
// Memory: 82 MB
// Submitted: 2025-11-14

function rangeAddQueries(n, queries) {
    let mat = Array.from({length: n}, () => Array(n).fill(0));
    for (let [row1, col1, row2, col2] of queries) {
        mat[row1][col1]++;
        if (row2 + 1 < n) mat[row2 + 1][col1]--;
        if (col2 + 1 < n) mat[row1][col2 + 1]--;
        if (row2 + 1 < n && col2 + 1 < n) mat[row2 + 1][col2 + 1]++;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0) mat[i][j] += mat[i - 1][j];
            if (j > 0) mat[i][j] += mat[i][j - 1];
            if (i > 0 && j > 0) mat[i][j] -= mat[i - 1][j - 1];
        }
    }
    return mat;
}

