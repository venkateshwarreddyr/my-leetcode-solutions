// Problem: Shortest Path in a Grid with Obstacles Elimination
// LeetCode: https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/
// Language: javascript
// Runtime: 742 ms
// Memory: 120.7 MB
// Submitted: 2023-09-27

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (grid, k) {
    let mat = new Matrix(grid)

    return mat.bfs(0, 0, k)
};
class Matrix {
    constructor(g) {
        this.g = g;
        this.grid = g;
        this.m = g.length;
        this.n = g[0].length;
    }

    clg = (g = this.g) => {
        const cl = console.log;
        for (const R of g) cl(R.join("\t"));
        cl();
    };

    sides = [
        [-1, 0], //   N
        [0, -1], //   W
        [0, 1], //    E
        [1, 0], //    S
    ];

    vertical = [[0, 0, 1, -1]];
    horizontal = [[0, 0, -1, 1]];

    matrixOutOfBounds = (r, c, m = this.m, n = this.n) =>
        r < 0 || c < 0 || r >= m || c >= n;

    dfs2(i, j) {
        if (i < 0 || j < 0 || i >= this.m || j >= this.n) return;

        this.dfs(i - 1, j);
        this.dfs(i + 1, j);
        this.dfs(i, j - 1);
        this.dfs(i, j + 1);
    }

    dfs(i, j) {
        if (i < 0 || j < 0 || i >= this.m || j >= this.n) return;

        this.dfs(i - 1, j);
        this.dfs(i + 1, j);
        this.dfs(i, j - 1);
        this.dfs(i, j + 1);
    }
    dfsfn(i, j) {
        return this.dfs(i, j)
    }
    initVis() {
        this.vis = Array.from({ length: this.m }, () => new Array(this.n));
    }

    bfs(i, j, k) {
        let m = this.m, n = this.n
        let q = [[i, j, k, 0]];
        let ob = {}
        while (q.length) {
            let [x, y, k, d] = q.shift();
            let key = [x, y, k].join()
            if (ob[key]) continue
            ob[key] = 1
            if (x === m - 1 && y === n - 1) {
                return d
            }
            for (let [dx, dy] of this.sides) {
                let nx = x + dx,
                    ny = y + dy;
                if (this.matrixOutOfBounds(nx, ny)) continue
                if (this.grid[nx][ny] === 1) {
                    if (k) {
                        q.push([nx, ny, k - 1, d + 1]);
                    }
                } else {
                    q.push([nx, ny, k, d + 1]);
                }
            }
        }

        return -1;
    }

    transpose(g = this.g) {
        let m = g.length;
        let n = g[0].length;
        let g2 = Array.from({ length: n }, () => new Array(m).fill(0));
        for (let r = 0; r < m; r++)
            for (let c = 0; c < n; c++) {
                g2[c][r] = g[r][c];
            }
        return g2;
    }
}

