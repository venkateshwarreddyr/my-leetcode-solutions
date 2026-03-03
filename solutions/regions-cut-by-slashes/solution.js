// Problem: Regions Cut By Slashes
// LeetCode: https://leetcode.com/problems/regions-cut-by-slashes/
// Language: javascript
// Runtime: 259 ms
// Memory: 54.5 MB
// Submitted: 2023-05-16

cl = console.log
var regionsBySlashes = function (grid) {
    let newGrid = [...new Array(grid.length * 4)].map((_) => new Array(grid[0].length * 4).fill(0));

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if ("/".includes(grid[i][j])) {
                for (let x = 0; x < 4; x++) {
                    for (let y = 0; y < 4; y++) {
                        newGrid[i * 4 + x][j * 4 + y] = x + y === 3 ? 1 : 0;
                    }
                }
            } else if ("\\".includes(grid[i][j])) {
                for (let x = 0; x < 4; x++) {
                    for (let y = 0; y < 4; y++) {
                        newGrid[i * 4 + x][j * 4 + y] = x === y ? 1 : 0;
                    }
                }
            }
        }
    }
    grid = newGrid;
    let m = grid.length;
    let n = grid[0].length;
    let g = [...new Array(m * n)].map((_, i) => i);
    let an = 0;

    const find = (a) => {
        return a === g[a] ? a : find(g[a]);
    };

    const union = (a, b) => {
        let u = find(a);
        let v = find(b);

        if (u > v) {
            g[u] = v;
        } else if (u < v) {
            g[v] = u;
        }
    };

    sides = [
        [0, -1], //   W
        [-1, 0], //   N
        [0, 1], //    E
        [1, 0], //    S
    ];
    const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
    const dfs = ([ii, jj]) => {
        grid[ii][jj] = -1
        for (let [si, sj] of sides) {
            if (
                !matrixOutOfBounds(ii + si, jj + sj, grid.length, grid[0].length)
            ) {
                if (grid[ii + si][jj + sj] === 0) {
                    a = ii * n + jj;
                    b = (ii + si) * n + jj + sj;
                    union(a, b)
                    dfs([ii + si, jj + sj]);
                }
            }
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0) {
                dfs([i, j]);
                an++;
            } else {
                g[i * n + j] = -1;
            }
        }
    }

    cl(g)
    let set = new Set(g);
    set.delete(-1)
    return set.size;

};
