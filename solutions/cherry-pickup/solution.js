// Problem: Cherry Pickup
// LeetCode: https://leetcode.com/problems/cherry-pickup/
// Language: javascript
// Runtime: 336 ms
// Memory: 81.6 MB
// Submitted: 2023-09-27

cl = console.log
/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
    let mat = new Matrix(grid)

    mat.dfsfn(0, 0, 0, 0)

    if (mat.end) {
        return mat.ob[[0, 0, 0, 0].join()]
    }

    return 0
};

class Matrix {
    // let mat = new Matrix(grid)
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
    ob = {}
    end = false
    dfs(i, j, k, l) {
        if (i < 0 || j < 0 || i >= this.m || j >= this.n || this.grid[i][j] === -1) return -Infinity;
        if (k < 0 || l < 0 || k >= this.m || l >= this.n || this.grid[k][l] === -1) return -Infinity;
        let key = [i, j, k, l].join()
        if (this.ob[key]) return this.ob[key]
        if ((i === this.n - 1 && j === this.n - 1)) { this.end = true; return this.ob[key] = this.grid[i][j] }
        if ((k === this.n - 1 && l === this.n - 1)) { this.end = true; return this.ob[key] = this.grid[k][l] }
        let cc = 0
        if (i === k && j === l) {
            cc += this.grid[i][j]
        } else {
            cc += this.grid[i][j] + this.grid[k][l]
        }

        let a = this.dfs(i, j + 1, k, l + 1)
        let b = this.dfs(i + 1, j, k + 1, l)
        let c = this.dfs(i, j + 1, k + 1, l)
        let d = this.dfs(i + 1, j, k, l + 1)

        let an = cc + Math.max(a, b, c, d)
        this.ob[key] = an
        return an
    }

    dfsfn(i, j, k, l) {
        return this.dfs(i, j, k, l)
    }

    initVis() {
        this.vis = Array.from({ length: this.m }, () => new Array(this.n));
    }

    bfs(i, j) {
        let m = this.m,
            n = this.n;
        let q = [[i, j, 0]];
        while (q.length) {
            let [x, y, d] = q.shift();
            if (x === m - 1 && y === n - 1) {
                return d;
            }
            for (let [dx, dy] of this.sides) {
                let nx = x + dx,
                    ny = y + dy;
                if (this.matrixOutOfBounds(nx, ny)) continue;

                q.push([nx, ny, d + 1]);
            }
        }

        return -1;
    }

    bfsfn(i, j) {
        return this.bfs(i, j);
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

