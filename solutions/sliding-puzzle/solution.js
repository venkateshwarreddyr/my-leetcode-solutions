// Problem: Sliding Puzzle
// LeetCode: https://leetcode.com/problems/sliding-puzzle/
// Language: javascript
// Runtime: 86 ms
// Memory: 46.3 MB
// Submitted: 2023-08-18

let sides = [
    [-1, 0], //   N
    [0, -1], //   W
    [0, 1], //    E
    [1, 0], //    S
];
const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;

var slidingPuzzle = function (grid) {
    let m = grid.length
    let n = grid[0].length
    let set = new Set()

    let queue = [[grid, 0]]
    while (queue.length) {
        let [grid, lvl] = queue.shift()
        let changeNeeded = false

        OO:
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (i === m - 1 && j === n - 1) {
                } else if (grid[i][j] === i * n + j + 1) {
                } else {
                    changeNeeded = true
                    break OO;
                }
            }
        }
        if (!changeNeeded) {
            return lvl
        }
        let sg = JSON.stringify(grid)
        if (set.has(sg)) continue
        set.add(sg)
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 0) {
                    for (let [si, sj] of sides) {
                        let x = i + si
                        let y = j + sj
                        if (!matrixOutOfBounds(x, y, m, n)) {
                            let newGrid = JSON.parse(JSON.stringify(grid))
                            newGrid[i][j] = newGrid[x][y]
                            newGrid[x][y] = 0
                            queue.push([newGrid, lvl + 1])
                        }
                    }

                }
            }
        }

    }

    return -1
};
