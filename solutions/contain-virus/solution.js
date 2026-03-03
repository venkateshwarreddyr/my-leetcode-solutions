// Problem: Contain Virus
// LeetCode: https://leetcode.com/problems/contain-virus/
// Language: javascript
// Runtime: 84 ms
// Memory: 51.2 MB
// Submitted: 2023-09-26

cl = console.log
var containVirus = function (grid) {
    let g = new Matrix(grid)
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const pq = new PriorityQueue({ compare: (a, b) => b.uninfected.size - a.uninfected.size }); // decreasing
    let an = 0
    while (true) {
        g.fn(pq)

        if (pq.isEmpty()) break

        let x = pq.dequeue()
        an += x.wc
        for (let e of x.infected) {
            let [i, j] = JSON.parse(e)
            g.g[i][j] = -1
        }

        while (!pq.isEmpty()) {
            let x = pq.dequeue()

            for (let e of x.uninfected) {
                let [i, j] = JSON.parse(e)
                g.g[i][j] = 1
            }
        }

    }

    return an
};
class Matrix {
    constructor(g) {
        this.g = g;
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

    fn(pq) {
        this.initVis()

        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (this.vis[i][j]) continue
                if (!this.g[i][j]) continue
                if (this.g[i][j] === -1) continue
                let ob = {
                    infected: new Set(),
                    uninfected: new Set(),
                    wc: 0
                }
                this.dfs(i, j, ob)
                pq.enqueue(ob)
            }
        }
    }

    bfs(i, j) {
        let q = [[i, j, 0]];
        while (q.length) {
            let [x, y] = q.shift();

            for (let [dx, dy] of this.sides) {
                let nx = x + dx,
                    ny = y + dy;
                q.push([nx, ny]);
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

