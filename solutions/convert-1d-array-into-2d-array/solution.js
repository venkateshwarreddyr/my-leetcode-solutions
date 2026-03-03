// Problem: Convert 1D Array Into 2D Array
// LeetCode: https://leetcode.com/problems/convert-1d-array-into-2d-array/
// Language: javascript
// Runtime: 241 ms
// Memory: 81.5 MB
// Submitted: 2023-07-16

var construct2DArray = function (a, m, n) {
    if (a.length !== m * n) return [];

    let g = [];
    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(a[n * i + j]);
        }
        g.push(row);
    }
    return g;
};
