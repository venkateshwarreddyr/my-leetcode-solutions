// Problem: Swim in Rising Water
// LeetCode: https://leetcode.com/problems/swim-in-rising-water/
// Language: javascript
// Runtime: 122 ms
// Memory: 50.5 MB
// Submitted: 2023-08-01

cl = console.log
class UnionFind {
    constructor(n) {
        this.o = Array.from({ length: n }, (_, i) => i);
        this.osize = new Array(n).fill(1);
    }

    build(edges) {
        for (let [x, u, v] of edges) {
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

    getMax() {
        return Math.max(...Object.values(this.osize));
    }

    print() {
        cl(this.o);
        cl(this.osize);
    }
}
let sides = [
    [-1, 0], //   N
    [0, -1], //   W
    [0, 1], //    E
    [1, 0], //    S
];


const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
var swimInWater = function (grid) {
    let n = grid.length
    let uf = new UnionFind(n * n)
    let ob = {}

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            ob[grid[i][j]] = [i, j]
        }
    }

    for (let i = 0; i < n * n; i++) {
        let [x, y] = ob[i]
        grid[x][y] = 1
        for (let [dx, dy] of sides) {
            if (!matrixOutOfBounds(x + dx, y + dy, n, n) && grid[x + dx][y + dy] === 1) {
                uf.union((x + dx) * n + y + dy, x * n + y)
            }
        }

        if (uf.find(0) === uf.find(n * n - 1)) return i
    }
};
