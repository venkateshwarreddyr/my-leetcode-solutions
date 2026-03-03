// Problem: N-Queens
// LeetCode: https://leetcode.com/problems/n-queens/
// Language: javascript
// Runtime: 7 ms
// Memory: 58.5 MB
// Submitted: 2026-01-13

var solveNQueens = function (n) {
    let res = []
    let g = Array.from({ length: n }, () => new Array(n).fill('.'))
    let cols = new Array(n).fill(0)
    let diag = new Array(n).fill(0)
    let antiDiag = new Array(n).fill(0)
    const getGrid = () => g.map(row => row.join(""))

    function bt(r) {
        if (r === n) {
            res.push(getGrid())
            return
        }

        for (let c = 0; c < n; c++) {
            if (cols[c] || diag[r - c + n - 1] || antiDiag[r + c]) continue

            g[r][c] = 'Q'
            cols[c] = diag[r - c + n - 1] = antiDiag[r + c] = 1
            bt(r + 1)
            g[r][c] = '.'
            cols[c] = diag[r - c + n - 1] = antiDiag[r + c] = 0
        }
    }

    bt(0)
    return res
};

