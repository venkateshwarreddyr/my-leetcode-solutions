// Problem: Valid Sudoku
// LeetCode: https://leetcode.com/problems/valid-sudoku/
// Language: javascript
// Runtime: 69 ms
// Memory: 44.8 MB
// Submitted: 2023-08-24

cl = console.log
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let n = 9
    for (let i = 0; i < n; i++) {
        let ob = {}
        for (let j = 0; j < n; j++) {
            if (ob[board[i][j]]) return false
            if (board[i][j] !== ".")
                ob[board[i][j]] = 1
        }
    }
    for (let j = 0; j < n; j++) {
        let ob = {}
        for (let i = 0; i < n; i++) {
            if (ob[board[i][j]]) return false
            if (board[i][j] !== ".")
                ob[board[i][j]] = 1
        }
    }
    for (let i = 0; i < n; i += 3) {
        for (let j = 0; j < n; j += 3) {
            let ob = {}
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    if (ob[board[i + k][j + l]]) return false
                    if (board[i + k][j + l] !== ".")
                        ob[board[i + k][j + l]] = 1
                }
            }
        }
    }

    return true
};
