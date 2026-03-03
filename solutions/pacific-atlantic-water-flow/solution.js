// Problem: Pacific Atlantic Water Flow
// LeetCode: https://leetcode.com/problems/pacific-atlantic-water-flow/
// Language: javascript
// Runtime: 1538 ms
// Memory: 78.4 MB
// Submitted: 2023-10-02

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (grid) {
    let mat = new Matrix(grid)
    let an = []
    for (let i = 0; i < mat.m; i++) {
        for (let j = 0; j < mat.n; j++) {
            if (mat.dfsfn(i, j) === 3) {
                an.push([i, j])
            }
        }
    }

    return an
};

cl = console.log
class Matrix {
    // let mat = new Matrix(grid)
    constructor(g) {
        this.g = g;
        this.grid = g;
        this.m = g.length;
        this.n = g[0].length;
        this.memo = Array.from({ length: this.m }, () => new Array(this.n));
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

    dfs(i, j, p) {
        if (i < 0 || j < 0) return 1;
        if (i >= this.m || j >= this.n) return 2;
        if (this.vis[i][j]) return 0
        let x = this.grid[i][j]
        if (p < x) {
            return this.memo[i][j] = 0
        }
        this.vis[i][j] = 1
        let set = new Set()
        set.add(this.dfs(i - 1, j, x));
        set.add(this.dfs(i + 1, j, x));
        set.add(this.dfs(i, j - 1, x));
        set.add(this.dfs(i, j + 1, x));

        if (set.has(1) && set.has(2) || set.has(3)) {
            return this.memo[i][j] = 3
        }

        if (set.has(1)) {
            return this.memo[i][j] = 1
        }

        if (set.has(2)) {
            return this.memo[i][j] = 2
        }

        return 0
    }

    dfsfn(i, j) {
        this.initVis()
        return this.dfs(i, j,);
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

