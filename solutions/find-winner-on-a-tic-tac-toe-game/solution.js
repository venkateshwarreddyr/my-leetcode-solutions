// Problem: Find Winner on a Tic Tac Toe Game
// LeetCode: https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/
// Language: javascript
// Runtime: 76 ms
// Memory: 43.2 MB
// Submitted: 2023-06-01

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    let draw = true
    let grid = [...new Array(3)].map(e => new Array(3))

    let i = 0
    for (let [a, b] of moves) {
        let curr = i % 2 === 0 ? "A" : "B"
        grid[a][b] = curr

        let c = 0
        for (let i = 0; i < grid.length; i++) {
            if (grid[i][b] === curr) {
                c++
            }
        }
        if (c === 3) return curr
        c = 0
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[a][j] === curr) {
                c++
            }
        }
        if (c === 3) return curr

        c = 0
        for (let i = 0; i < grid.length; i++) {
            if (grid[i][i] === curr) {
                c++
            }
        }
        if (c === 3) return curr

        c = 0
        for (let i = 0, j = 2; i < grid.length; i++, j--) {
            if (grid[i][j] === curr) {
                c++
            }
        }
        if (c === 3) return curr

        i++
    }
    c = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j]) c++
        }
    }
    if (c === 9) return "Draw"
    return "Pending"
};
