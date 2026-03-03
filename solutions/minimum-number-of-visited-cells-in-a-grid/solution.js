// Problem: Minimum Number of Visited Cells in a Grid
// LeetCode: https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/
// Language: javascript
// Runtime: 18846 ms
// Memory: 82.7 MB
// Submitted: 2023-08-08

cl = console.log
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumVisitedCells = function (grid) {
    let m = grid.length
    let n = grid[0].length
    let memo = Array.from({ length: m }, () => new Array(n).fill(Infinity))
    memo[0][0] = 1
    let q = [[0, 0, 1]]
    while (q.length) {
        let [i, j, c] = q.shift()
        let val = grid[i][j]

        for (let k = val; k >= 1; k--) {
            if (i + k < m && c + 1 < memo[i + k][j]) {
                q.push([i + k, j, c + 1])
                memo[i + k][j] = c + 1
                if (i + k === m - 1 && j === n - 1) {
                    return c + 1
                }
            }

            if (j + k < n && c + 1 < memo[i][j + k]) {
                q.push([i, j + k, c + 1])
                memo[i][j + k] = c + 1
                if (i === m - 1 && j + k === n - 1) {
                    return c + 1
                }
            }


        }
    }

    return memo[m - 1][n - 1] === Infinity ? -1 : memo[m - 1][n - 1]
};
