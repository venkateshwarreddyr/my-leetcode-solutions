// Problem: Number of Islands
// LeetCode: https://leetcode.com/problems/number-of-islands/
// Language: javascript
// Runtime: 98 ms
// Memory: 69.7 MB
// Submitted: 2025-07-03

let cl = console.log

var numIslands = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    let g = [...new Array(m * n).keys()];

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

    const dfsMatrix = (grid) => {
        let c = 0;
        sides = [
            [0, -1], //   W
            [-1, 0], //   N
            [0, 1], //    E
            [1, 0], //    S
        ];
        const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
        for (let i = 0; i < m; i++) {


            for (let j = 0; j < n; j++) {

                if (grid[i][j] === '1') {
                    let stack = [];
                    stack.push([i, j]);
                    while (stack.length != 0) {
                        let [ii, jj] = stack.pop();
                        if (grid[ii][jj] < 1) continue;

                        for (let [si, sj] of sides) {
                            if (
                                !matrixOutOfBounds(ii + si, jj + sj, grid.length, grid[0].length)
                            ) {
                                if (grid[ii + si][jj + sj] === '1') {
                                    stack.push([ii + si, jj + sj]);
                                    let a = (ii * n) + jj;
                                    let b = ((ii + si) * n) + jj + sj

                                    // cl({ a, b })
                                    union(a, b)
                                }
                            }
                        }

                        grid[ii][jj] = -1
                    }
                } else if (grid[i][j] === '0') {
                    let a = (i * n) + j;
                    g[a] = -1;
                }

            }
        }

    };

    dfsMatrix(grid);
    let an = new Set(g)
    an.delete(-1);
    return an.size ;
};
