// Problem: Bricks Falling When Hit
// LeetCode: https://leetcode.com/problems/bricks-falling-when-hit/
// Language: javascript
// Runtime: 236 ms
// Memory: 70.3 MB
// Submitted: 2023-08-09

cl = console.log
class UnionFind {
    constructor(n) {
        this.o = Array.from({ length: n }, (_, i) => i);
        this.osize = new Array(n).fill(1);
    }

    build(edges) {
        for (let [u, v] of edges) {
            union(u, v);
        }
    }

    union(u, v) {
        u = this.find(u);
        v = this.find(v);

        if (u === v) return 0;

        if (this.osize[u] < this.osize[v]) {
            [u, v] = [v, u];
        } else if (this.osize[u] === this.osize[v] && u < v) {
            [u, v] = [v, u];
        }
        this.o[u] = v;
        this.osize[v] += this.osize[u];

        return 1;
    }

    find(u) {
        if (u !== this.o[u]) {
            this.o[u] = this.find(this.o[u]);
        }

        return this.o[u];
    }

    findVal(u) {
        return this.osize[this.find(u)];
    }

    getMax() {
        return Math.max(...Object.values(this.osize));
    }

    print() {
        let cl = console.log;
        cl(this.o);
        cl(this.osize);
    }

    size(x) {
        return this.osize[this.find(x)]
    }

    clone() {
        let ret = new UnionFind();
        ret.o = [...this.o];
        ret.osize = [...this.osize];

        return ret;
    }
}

var hitBricks = function (g, hits) {
    let m = g.length
    let n = g[0].length
    let g2 = JSON.parse(JSON.stringify(g))
    let uf = new UnionFind(m * n + 1)
    for (let [u, v] of hits) {
        g2[u][v] = 0
    }
    function getx(x, y) { return x * n + y }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (g2[i][j]) {
                if (i === 0) {
                    uf.union(getx(i, j), m * n)
                }
                if (i > 0 && g2[i - 1][j]) {
                    uf.union(getx(i, j), getx(i - 1, j))
                }
                if (j > 0 && g2[i][j - 1]) {
                    uf.union(getx(i, j), getx(i, j - 1))
                }
            }
        }
    }

    let an = []
    hits.reverse()
    let sides = [
        [-1, 0], //   N
        [0, -1], //   W
        [0, 1], //    E
        [1, 0], //    S
    ];
    const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
    for (let [u, v] of hits) {
        if (g[u][v] === 0) {
            an.push(0)
            continue;
        }
        let prev = uf.size(m * n)
        g2[u][v] = 1
        if (u === 0) {
            uf.union(getx(u, v), m * n)
        }
        for (let [si, sj] of sides) {
            let x = u + si
            let y = v + sj
            if (!matrixOutOfBounds(x, y, m, n)) {
                if (g2[x][y] === 1) {
                    uf.union(getx(u, v), getx(x, y))
                }
            }
        }
        let curr = uf.size(m * n)
        an.push(
            Math.max(0, curr - prev - 1)
        )
    }

    return an.reverse()
}
