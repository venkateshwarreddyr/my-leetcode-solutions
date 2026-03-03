// Problem: Minesweeper
// LeetCode: https://leetcode.com/problems/minesweeper/
// Language: javascript
// Runtime: 90 ms
// Memory: 50 MB
// Submitted: 2023-09-13

cl = console.log
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (grid, [x, y]) {
    let m = grid.length;
    let n = grid[0].length;
    // if (grid[x][y] === "M") {
    //     grid[x][y] = "X"
    //     return grid
    // }
    let sides = [
        [-1, 0], //   N
        [0, -1], //   W
        [0, 1], //    E
        [1, 0], //    S
        [1, 1],
        [-1, -1],
        [-1, 1],
        [1, -1]
    ];

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === "B") return;
        if (grid[i][j] === "M") {
            grid[i][j] = "X"
            return
        }
        if (grid[i][j] !== 'E') return;
        let sum = 0
        for (let [x, y] of sides) {
            if (grid[i + x]?.[j + y] === "M") {
                sum++
            }
        }
        if (sum) {
            grid[i][j] = sum.toString()
        } else {
            grid[i][j] = 'B';
            for (let [x, y] of sides) {
                dfs(i + x, j + y)
            }
        }
    }
    dfs(x, y)
    return grid
};
