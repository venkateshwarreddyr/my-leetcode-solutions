// Problem: Minimum Moves to Reach Target with Rotations
// LeetCode: https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/
// Language: javascript
// Runtime: 141 ms
// Memory: 54.4 MB
// Submitted: 2023-09-27

cl = console.log
var minimumMoves = function (grid) {

    let g = new Matrix(grid)
    return g.bfs(0, 1, true)
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

    vertical = [
        [0, 0, 1, -1],
    ]
    horizontal = [
        [0, 0, -1, 1],
    ]

    matrixOutOfBounds = (r, c, m = this.m, n = this.n) =>
        r < 0 || c < 0 || r >= m || c >= n;

    dfs2(i, j) {
        if (i < 0 || j < 0 || i >= this.m || j >= this.n) return;

        this.dfs(i - 1, j);
        this.dfs(i + 1, j);
        this.dfs(i, j - 1);
        this.dfs(i, j + 1);
    }

    dfs(i, j, ob) {
        if (i < 0 || j < 0 || i >= this.m || j >= this.n || this.vis[i][j] || this.g[i][j] === -1) return;

        let str = JSON.stringify([i, j])
        if (this.g[i][j] === 0) {
            ob.wc++
            ob.uninfected.add(str)
            return
        }
        this.vis[i][j] = 1
        ob.infected.add(str)
        this.dfs(i - 1, j, ob);
        this.dfs(i + 1, j, ob);
        this.dfs(i, j - 1, ob);
        this.dfs(i, j + 1, ob);
    }

    initVis() {
        this.vis = Array.from({ length: this.m }, () => new Array(this.n))
    }

    bfs(i, j, ishor) {
        let q = [[i, j, ishor, 0]];
        let vis = {}
        while (q.length) {
            let n = this.n
            let [x, y, ishor, d] = q.shift();
            let str = [x, y, ishor].join()
            if (vis[str]) continue
            vis[str] = 1
            if (ishor && x === n - 1 && y === n - 1) return d
            if (ishor) {
                if (!this.matrixOutOfBounds(x, y + 1) && this.grid[x][y + 1] === 0) {
                    q.push([x, y + 1, ishor, d + 1])
                }
                if (!this.matrixOutOfBounds(x + 1, y) && !this.matrixOutOfBounds(x + 1, y - 1) && this.grid[x + 1][y] === 0 && this.grid[x + 1][y - 1] === 0) {
                    q.push([x + 1, y, ishor, d + 1])
                    q.push([x + 1, y - 1, !ishor, d + 1])
                }
            } else {
                if (!this.matrixOutOfBounds(x + 1, y) && this.grid[x + 1][y] === 0) {
                    q.push([x + 1, y, ishor, d + 1])

                }
                if (!this.matrixOutOfBounds(x - 1, y + 1) && !this.matrixOutOfBounds(x, y + 1) && this.grid[x - 1][y + 1] === 0 && this.grid[x][y + 1] === 0
                ) {
                    q.push([x, y + 1, ishor, d + 1])
                    q.push([x - 1, y + 1, !ishor, d + 1])
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

/**
[
[0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0],
[0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0],
[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
[0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0],
[1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1],
[0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],
[0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0],
[0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0],
[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0],
[0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0]
]
 */

