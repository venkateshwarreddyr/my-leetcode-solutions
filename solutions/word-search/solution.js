// Problem: Word Search
// LeetCode: https://leetcode.com/problems/word-search/
// Language: javascript
// Runtime: 1099 ms
// Memory: 44.6 MB
// Submitted: 2023-07-12

cl = console.log
const sides = [
    [0, -1], //   W
    [-1, 0], //   N
    [0, 1], //    E
    [1, 0], //    S
];
const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;

var exist = function (board, word) {
    let an = false
    let m = board.length
    let n = board[0].length

    function bt(istart, jstart, start) {
        if (start === word.length) {
            an = true
            return;
        }
        if (an) return;

        for (let [a, b] of sides) {
            if (matrixOutOfBounds(a + istart, jstart, m, n)) continue;
            if (board[a + istart][b + jstart] === word[start]) {
                let x = board[a + istart][b + jstart]
                board[a + istart][b + jstart] = "."
                bt(a + istart, b + jstart, start + 1)
                board[a + istart][b + jstart] = x;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                let x = board[i][j]
                board[i][j] = "."
                bt(i, j, 1)
                if (an) return an;
                board[i][j] = x;
            }
        }
    }

    return an;
};
