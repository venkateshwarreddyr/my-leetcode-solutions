// Problem: Max Increase to Keep City Skyline
// LeetCode: https://leetcode.com/problems/max-increase-to-keep-city-skyline/
// Language: javascript
// Runtime: 75 ms
// Memory: 45 MB
// Submitted: 2023-07-15

cl = console.log
var maxIncreaseKeepingSkyline = function (grid) {
    let an = 0
    let m = grid.length;
    let n = grid[0].length;

    let rowMax = grid.reduce((a, c) => [...a, Math.max(...c)], [])

    let colMax = grid.reduce((a, c) => {
        for (let i = 0; i < c.length; i++) {
            a[i] = Math.max(a[i], c[i])
        }
        return a
    }, new Array(n).fill(0))

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let x = Math.min(rowMax[i], colMax[j])
            an += (x - grid[i][j])
            grid[i][j] = x
        }
    }

    return an
};

