// Problem: Count Islands With Total Value Divisible by K
// LeetCode: https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k/
// Language: javascript
// Runtime: 319 ms
// Memory: 79 MB
// Submitted: 2025-07-28

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function (grid, k) {

    let m = grid.length
    let n = grid[0].length

    let ans = 0

    let visited = Array.from({ length: m }, () => new Array(n).fill(false))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0 && visited[i][j] === false) {
                let totalValue = dfs_(i, j)
                if (totalValue % k === 0) {
                    ans++
                }
            }
        }
    }

    function dfs_(i, j) {
        if (i < 0 || j < 0 || i >= m || j >= n) return 0
        if (grid[i][j] === 0) return 0

        if (visited[i][j] === true) return 0
        visited[i][j] = true

        let sum = grid[i][j]
            + dfs_(i + 1, j)
            + dfs_(i - 1, j)
            + dfs_(i, j + 1)
            + dfs_(i, j - 1);

        return sum
    }

    return ans
};
