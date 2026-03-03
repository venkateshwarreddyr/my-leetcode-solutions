// Problem: Maximum Difference Score in a Grid
// LeetCode: https://leetcode.com/problems/maximum-difference-score-in-a-grid/
// Language: javascript
// Runtime: 1333 ms
// Memory: 66.1 MB
// Submitted: 2025-12-13

var maxScore = function (g) {
    let m = g.length
    let n = g[0].length

    // maxSumTillij
    let g2 = Array.from({ length: m }, () => new Array(n).fill(-Infinity))
    let toMaxSum = -Infinity

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const fromVal = g[i][j]
            let fromMaxSum = g2[i][j]
            fromMaxSum = Math.max(fromMaxSum, 0)
            // right
            for (let k = j + 1; k < n; k++) {
                const toVal = g[i][k]
                let score = toVal - fromVal
                let toSum = fromMaxSum + score
                g2[i][k] = Math.max(g2[i][k], toSum)
                toMaxSum = Math.max(toMaxSum, toSum)
            }
            // down
            for (let k = i + 1; k < m; k++) {
                const toVal = g[k][j]
                let score = toVal - fromVal
                let toSum = fromMaxSum + score
                g2[k][j] = Math.max(g2[k][j], toSum)
                toMaxSum = Math.max(toMaxSum, toSum)
            }
        }
    }

    return toMaxSum
}

var maxScore2222 = function (grid) {
    let m = grid.length
    let n = grid[0].length
    let mat = new Array(m).fill().map(e => new Array(n))

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let maxI = -Infinity
            let maxJ = -Infinity
            for (let ii = i + 1; ii < m; ii++) {
                maxJ = Math.max(maxI, grid[ii][j])
            }

            for (let jj = j + 1; jj < n; jj++) {
                maxI = Math.max(maxI, grid[i][jj])
            }
            mat[i][j] = Math.max(maxI - grid[i][j], maxJ - grid[i][j])
        }
    }
    console.log(mat)
    return dfsMatrix(grid)
};

const dfsMatrix = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    console.log("Hi")
    let c = 0;
    let sides = [
        [0, 1], //    E
        [1, 0], //    S
    ];
    const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
    let max = -Infinity
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            console.log()
            let stack = [];
            stack.push([i, j, 0]);
            while (stack.length != 0) {
                let [ii, jj, weight] = stack.pop();
                if (i === ii && j === jj) { }
                else
                    max = Math.max(weight, max)
                let sides = []
                let counter = 1
                for (let k = ii + 1; k < m; k++) {
                    sides.push([counter++, 0])
                }
                counter = 1
                for (let k = jj + 1; k < n; k++) {
                    sides.push([0, counter++])
                }
                for (let [si, sj] of sides) {
                    if (!matrixOutOfBounds(ii + si, jj + sj, m, n)) {
                        stack.push([ii + si, jj + sj, weight + grid[ii + si][jj + sj] - grid[ii][jj]]);
                    }
                }

            }
        }
    }

    return max
};

