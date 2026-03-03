// Problem: Minimum Path Cost in a Grid
// LeetCode: https://leetcode.com/problems/minimum-path-cost-in-a-grid/
// Language: javascript
// Runtime: 95 ms
// Memory: 57.3 MB
// Submitted: 2023-08-18

cl = console.log
/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
var minPathCost = function (grid, moveCost) {
    let m = grid.length
    let n = grid[0].length
    let costTillNow = [...grid[0]]
    for (let i = 1; i < m; i++) {
        let nextCost = new Array(n).fill(0)
        for (let j = 0; j < n; j++) {
            let min = Infinity
            for (let k = 0; k < n; k++) {
                let cost = moveCost[grid[i - 1][k]][j]
                min = Math.min(
                    min,
                    costTillNow[k] + cost
                )
            }
            nextCost[j] = grid[i][j] + min
        }
        costTillNow = nextCost
    }

    return Math.min(...costTillNow)
};
