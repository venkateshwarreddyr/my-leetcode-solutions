// Problem: Maximum Number of Points From Grid Queries
// LeetCode: https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/
// Language: javascript
// Runtime: 376 ms
// Memory: 84.5 MB
// Submitted: 2023-08-09

cl = console.log
class UnionFind {
    constructor(n) {
        this.o = Array.from({ length: n }, (_, i) => i);
        this.osize = new Array(n).fill(1);
        this.osize[n - 1] = 0
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

    clone() {
        let ret = new UnionFind();
        ret.o = [...this.o];
        ret.osize = [...this.osize];

        return ret;
    }

    size(x) {
        return this.osize[this.find(x)];
    }
}

let sides = [
    [-1, 0], //   N
    [0, -1], //   W
    [0, 1], //    E
    [1, 0], //    S
];
const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;

var maxPoints = function (grid, queries) {
    queries = queries.map((e, i) => ({ e, ei: i }))
    queries.sort((a, b) => a.e - b.e)
    let m = grid.length
    let n = grid[0].length
    let uf = new UnionFind(m * n + 1)
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const pq = new PriorityQueue({ compare: (a, b) => a[2] - b[2] }); // increasing
    pq.enqueue([0, 0, grid[0][0]])

    function getI(i, j) {
        return i * n + j
    }

    let an = new Array(queries.length)
    let vis = Array.from({ length: m }, () => new Array(n))

    vis[0][0] = 1
    for (let { e, ei } of queries) {

        while (!pq.isEmpty() && pq.front()[2] < e) {
            let [i, j, gv] = pq.front()
            if (gv < e) {
                pq.dequeue()
                uf.union(m * n, getI(i, j))
                for (let [si, sj] of sides) {
                    if (!matrixOutOfBounds(i + si, j + sj, m, n)) {
                        if (vis[i + si][j + sj]) continue
                        pq.enqueue([i + si, j + sj, grid[i + si][j + sj]])
                        vis[i + si][j + sj] = 1
                    }
                }

            }
        }

        an[ei] = uf.size(m * n)
    }


    return an;
};
