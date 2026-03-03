// Problem: First Completely Painted Row or Column
// LeetCode: https://leetcode.com/problems/first-completely-painted-row-or-column/
// Language: javascript
// Runtime: 186 ms
// Memory: 77.3 MB
// Submitted: 2023-06-06

cl = console.log
var firstCompleteIndex = function (arr, mat) {
    const m = mat.length;
    const n = mat[0].length;

    const hash = {}

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            hash[mat[i][j]] = { i, j }
        }
    }

    const rows = new Array(m).fill(0)
    const cols = new Array(n).fill(0)


    const last = m * n;
    for (let k = 0; k < last; k++) {
        const { i, j } = hash[arr[k]];
        rows[i]++
        cols[j]++
        if (rows[i] === n || cols[j] === m) return k
    }
};
