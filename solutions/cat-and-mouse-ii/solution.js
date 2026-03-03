// Problem: Cat and Mouse II
// LeetCode: https://leetcode.com/problems/cat-and-mouse-ii/
// Language: javascript
// Runtime: 2957 ms
// Memory: 135.8 MB
// Submitted: 2023-09-21

cl = console.log
var canMouseWin = function (grid, catJump, mouseJump) {
    let m = grid.length;
    let n = grid[0].length;
    let food = null
    let sides = [
        [-1, 0], //   N
        [0, -1], //   W
        [0, 1], //    E
        [1, 0], //    S
    ];
    const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
    let memo = Array.from({ length: m }, () => Array.from({ length: n }, () => Array.from({ length: m }, () => Array.from({ length: n }, () => new Array(200)))))
    function dfs([mi, mj], [ci, cj], moves) {
        if (moves >= 200) {
            return 0;
        }
        if (memo[mi][mj][ci][cj][moves] !== undefined) return (memo[mi][mj][ci][cj][moves]);
        if (moves % 2 === 0) {
            // mouse
            for (let [si, sj] of sides) {
                for (let j = 0; j <= mouseJump; j++) {
                    let x = mi + si * j
                    let y = mj + sj * j
                    if (matrixOutOfBounds(x, y, m, n) || grid[x][y] === "#") {
                        break
                    }
                    if (x === ci && y === cj) {
                        continue
                    }
                    if (grid[x][y] === "F") {
                        return (memo[mi][mj][ci][cj][moves] = 1);
                    }
                    if (dfs([x, y], [ci, cj], moves + 1) === 1) {
                        return (memo[mi][mj][ci][cj][moves] = 1);
                    }
                }
            }
            return (memo[mi][mj][ci][cj][moves] = 0);
        } else {
            // cat
            for (let [si, sj] of sides) {
                for (let j = 0; j <= catJump; j++) {
                    let x = ci + si * j
                    let y = cj + sj * j
                    if (matrixOutOfBounds(x, y, m, n) || grid[x][y] === "#") {
                        break
                    }
                    if ((x === mi && y === mj) || grid[x][y] === "F") {
                        return (memo[mi][mj][ci][cj][moves] = 0);
                    }

                    if (dfs([mi, mj], [x, y], moves + 1) === 0) {
                        return (memo[mi][mj][ci][cj][moves] = 0);
                    }
                }
            }
            return (memo[mi][mj][ci][cj][moves] = 1);
        }
    }

    let cat = null
    let mouse = null
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "M") {
                mouse = [i, j]
            }
            if (grid[i][j] === "C") {
                cat = [i, j]
            }
            if (grid[i][j] === "F") {
                food = [i, j]
            }
        }
    }
    cl({ mouse, cat, food })
    return dfs(mouse, cat, 0)
};
