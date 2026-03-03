// Problem:  Check if There Is a Valid Parentheses String Path
// LeetCode: https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/
// Language: javascript
// Runtime: 4909 ms
// Memory: 203.7 MB
// Submitted: 2023-09-27

cl = console.log
/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
    let mat = new Matrix(grid)

    return mat.bfsfn(0, 0)
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

    dfs(i, j) {
        if (i < 0 || j < 0 || i >= this.m || j >= this.n) return;

        this.dfs(i - 1, j);
        this.dfs(i + 1, j);
        this.dfs(i, j - 1);
        this.dfs(i, j + 1);
    }

    initVis() {
        this.vis = Array.from({ length: this.m }, () => new Array(this.n));
    }

    bfs(i, j) {
        let m = this.m,
            n = this.n;
        let q = [[i, j, this.grid[i][j] === "(" ? 1 : -1]];
        let ob = {}
        while (q.length) {
            let [x, y, pc] = q.shift();
            let key = [x, y, pc].join()
            if (ob[key]) continue
            ob[key] = 1
            if (x === m - 1 && y === n - 1 && pc === 0) {
                return true
            }
            if (pc < 0) continue

            for (let [dx, dy] of this.sides) {
                let nx = x + dx,
                    ny = y + dy;

                if (this.matrixOutOfBounds(nx, ny, m, n)) continue;

                if (this.grid[nx][ny] === "(") {
                    q.push([nx, ny, pc + 1]);
                } else {
                    q.push([nx, ny, pc - 1]);
                }
            }
        }

        return false;
    }
    bfsfn(i, j) {
        return this.bfs(i, j)
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

