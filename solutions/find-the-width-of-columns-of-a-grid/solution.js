// Problem: Find the Width of Columns of a Grid
// LeetCode: https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/
// Language: javascript
// Runtime: 76 ms
// Memory: 45.1 MB
// Submitted: 2023-07-16

var findColumnWidth = function (g) {
    let m = g.length;
    let n = g[0].length;

    let ans = new Array(n).fill(-Infinity);
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
            ans[j] = Math.max(ans[j], ("" + g[i][j]).length);
        }
    }
    return ans;
};
