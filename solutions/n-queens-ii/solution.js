// Problem: N-Queens II
// LeetCode: https://leetcode.com/problems/n-queens-ii/
// Language: javascript
// Runtime: 3736 ms
// Memory: 43.6 MB
// Submitted: 2023-07-12

cl = console.log
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {

    let cc = 0
    let grid = Array.from({ length: n }, () => new Array(n).fill(0));
    const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;

    function check(grid) {
        for (let i = 0; i < n; i++) {
            let rowssum = 0
            let colssum = 0

            for (let j = 0; j < n; j++) {
                rowssum += grid[i][j]
                colssum += grid[j][i]

            }

            if (rowssum === 1 && colssum === 1) {
            } else {
                return false
            }
        }

        for (let i = 0; i < n; i++) {
            let crossrowssum = 0
            let crosscolssum = 0

            for (let j = 0; j < n; j++) {
                if (!matrixOutOfBounds(i + j, j, n, n)) {
                    crossrowssum += grid[i + j][j]
                }
                if (!matrixOutOfBounds(j, i + j, n, n))
                    crosscolssum += grid[j][i + j]
            }

            if (crossrowssum <= 1 && crosscolssum <= 1) {
            } else {
                return false
            }
        }

        for (let i = 0; i < n; i++) {
            let crossrowssum = 0
            let crosscolssum = 0

            for (let j = n - 1; j > -1; j--) {
                if (!matrixOutOfBounds(i + n - j, j, n, n)) {
                    crossrowssum += grid[i + n - j][j]
                }
                if (!matrixOutOfBounds(i - j, j, n, n)) {
                    crosscolssum += grid[i - j][j]
                }
            }


            if (crossrowssum <= 1 && crosscolssum <= 1) {
            } else {
                return false
            }
        }

        return true
    }

    function bt(i) {
        if (i === n) {
            if (check(grid))
                cc++
            return;
        }
        for (let j = 0; j < n; j++) {
            if (grid[i - 1]?.[j + 1] === 1) continue
            if (grid[i - 1]?.[j] === 1) continue
            if (grid[i - 1]?.[j - 1] === 1) continue
            grid[i][j] = 1
            bt(i + 1)
            grid[i][j] = 0
        }
    }
    bt(0)

    return cc;
};

