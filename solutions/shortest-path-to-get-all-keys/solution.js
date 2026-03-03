// Problem: Shortest Path to Get All Keys
// LeetCode: https://leetcode.com/problems/shortest-path-to-get-all-keys/
// Language: javascript
// Runtime: 152 ms
// Memory: 53.1 MB
// Submitted: 2023-09-25

cl = console.log
/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {
    let g = new Matrix(grid)
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "@") {
                return g.bfs(i, j)
            }
        }
    }

};
class Matrix {
    keyStr = "abcdef"
    lockStr = "ABCDEF"

    constructor(g) {
        this.g = g;
        this.m = g.length
        this.n = g[0].length
    }

    clg = (g = this.g) => {
        const cl = console.log
        for (const R of g) cl(R.join("\t"));
        cl();
    };

    sides = [
        [-1, 0], //   N
        [0, -1], //   W
        [0, 1], //    E
        [1, 0], //    S
    ];
    matrixOutOfBounds = (r, c, m = this.m, n = this.n) => r < 0 || c < 0 || r >= m || c >= n;


    dfs(i, j) {
        if (i < 0 || j < 0 || i >= this.m || j >= this.n) return Infinity;


        this.dfs(i - 1, j)
        this.dfs(i + 1, j)
        this.dfs(i, j - 1)
        this.dfs(i, j + 1)


    }

    bfs(i, j) {
        let keys = 0
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (this.keyStr.includes(this.g[i][j])) {
                    keys++
                }
            }
        }

        let best = Array.from({ length: this.m }, () => Array.from({ length: this.n }, () => new Array(1 << keys).fill(Infinity)))

        let q = [[i, j, 0]]
        best[i][j][0] = 0
        while (q.length) {
            let [x, y, mask] = q.shift()
            let d = best[x][y][mask]
            if (mask === ((1 << keys) - 1)) {
                return d
            }
            for (let [dx, dy] of this.sides) {
                let nx = x + dx, ny = y + dy
                let nmask = mask

                if (this.matrixOutOfBounds(nx, ny)) continue
                if (this.g[nx][ny] === "#") continue
              
                if (this.lockStr.includes(this.g[nx][ny]) &&
                    (nmask & (1 << this.lockStr.indexOf(this.g[nx][ny]))) === 0
                ) {
                    continue
                }

                if (this.keyStr.includes(this.g[nx][ny])) {
                    nmask |= 1 << this.keyStr.indexOf(this.g[nx][ny])
                }
                if (d + 1 >= best[nx][ny][nmask]) continue


                q.push([nx, ny, nmask])
                best[nx][ny][nmask] = d + 1
            }
        }

        return -1
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
    };

}
