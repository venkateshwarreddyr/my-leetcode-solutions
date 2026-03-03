// Problem: Minimum Number of Flips to Convert Binary Matrix to Zero Matrix
// LeetCode: https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/
// Language: javascript
// Runtime: 142 ms
// Memory: 59.6 MB
// Submitted: 2023-08-17

const cl = console.log;

const ct = console.table;

const cla = (a) => cl(a.join(","));

const clo = (o) => cl(JSON.stringify(o));
let sides = [
    [-1, 0], //   N
    [0, -1], //   W
    [0, 1], //    E
    [1, 0], //    S
];
const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
var minFlips = function (grid) {
    let m = grid.length
    let n = grid[0].length
    let set = new Set()

    let queue = [[grid, 0]]
    while (queue.length) {
        let [grid, lvl] = queue.shift()
        let changed = false
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j]) {
                    changed = true
                }
            }
        }
        if (!changed) {
            return lvl
        }
        let sg = JSON.stringify(grid)
        if (set.has(sg)) continue
        set.add(sg)
        if (lvl > m * n) break;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                let newGrid = JSON.parse(JSON.stringify(grid))
                // if (newGrid[i][j]) {
                newGrid[i][j] = !newGrid[i][j]
                for (let [si, sj] of sides) {
                    let x = i + si
                    let y = j + sj
                    if (!matrixOutOfBounds(x, y, m, n)) {
                        newGrid[x][y] = !newGrid[x][y]
                    }
                }

                queue.push([newGrid, lvl + 1])
            }
            // }
        }

    }

    return -1
};
