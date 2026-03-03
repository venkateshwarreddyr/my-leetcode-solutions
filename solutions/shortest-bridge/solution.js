// Problem: Shortest Bridge
// LeetCode: https://leetcode.com/problems/shortest-bridge/
// Language: javascript
// Runtime: 84 ms
// Memory: 50.2 MB
// Submitted: 2023-08-22


cl = console.log
const getVis = (m, n, d = undefined) =>
    Array.from({ length: m }, () => new Array(n).fill(d));
const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;

let sides = [
    [-1, 0], //   N
    [0, -1], //   W
    [0, 1], //    E
    [1, 0], //    S
];
var shortestBridge = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n) return Infinity;
        if (memo[i][j] !== undefined) return memo[i][j]
        if (grid[i][j] === 1) {
            return 0
        }

        let min = 1 + Math.min(
            dfs(i - 1, j),
            dfs(i + 1, j),
            dfs(i, j - 1),
            dfs(i, j + 1)
        );
        memo[i][j] = min
        return min
    };

    const dfsMakeSiblings = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n) return;
        if (grid[i][j] === 1) {
            grid[i][j] = Infinity
            dfsMakeSiblings(i - 1, j)
            dfsMakeSiblings(i + 1, j)
            dfsMakeSiblings(i, j - 1)
            dfsMakeSiblings(i, j + 1)
        }
    };

    OO:
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                dfsMakeSiblings(i, j)
                break OO
            }
        }
    }

    let queue = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j])
            }
        }
    }

    while (queue.length) {
        let [i, j] = queue[0]
        let curr = grid[i][j]
        let nqueue = []
        for (let [i, j] of queue) {
            for (let [si, sj] of sides) {
                if (!matrixOutOfBounds(i + si, j + sj, m, n)) {
                    if (grid[i + si][j + sj] === 0) {
                        grid[i + si][j + sj] = curr + 1
                        nqueue.push([i + si, j + sj]);
                    } else if (grid[i + si][j + sj] === Infinity) return curr - 1
                }
            }
        }
        queue = nqueue
    }
};
