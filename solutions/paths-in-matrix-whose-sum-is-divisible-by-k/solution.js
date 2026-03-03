// Problem: Paths in Matrix Whose Sum Is Divisible by K
// LeetCode: https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/
// Language: javascript
// Runtime: 306 ms
// Memory: 101.6 MB
// Submitted: 2025-11-26

let MOD = 10 ** 9 + 7
var numberOfPaths = function (grid, k) {
    let mat = new Matrix(grid, k)

    return mat.dfsfn(0, 0)
};

class Matrix {
    // let mat = new Matrix(grid)
    constructor(g, k) {
        this.g = g;
        this.grid = g;
        this.m = g.length;
        this.n = g[0].length;
        this.k = k
        this.memo = Array.from({ length: this.m }, () => Array.from({ length: this.n }, () => new Array(this.k)))
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

    matrixOutOfBounds = (r, c, m = this.m, n = this.n) =>
        r < 0 || c < 0 || r >= m || c >= n;

    dfs2(i, j) {
        if (i < 0 || j < 0 || i >= this.m || j >= this.n) return;

        this.dfs(i - 1, j);
        this.dfs(i + 1, j);
        this.dfs(i, j - 1);
        this.dfs(i, j + 1);
    }


    dfs(i, j, s) {
        if (i < 0 || j < 0 || i >= this.m || j >= this.n) return 0;
        s += this.grid[i][j]
        s %= this.k
        // this.memo[i][j][s] = k

        if (i === this.m - 1 && j === this.n - 1 && s === 0) {
            return this.memo[i][j][s] = 1
        }
        if (this.memo[i][j][s] !== undefined) return this.memo[i][j][s]
        let sum = this.dfs(i + 1, j, s) + this.dfs(i, j + 1, s);
        return this.memo[i][j][s] = sum % MOD
    }

    dfsfn(i, j) {
        return this.dfs(i, j, 0) % MOD;
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

