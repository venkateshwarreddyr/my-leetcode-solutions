// Problem: Making A Large Island
// LeetCode: https://leetcode.com/problems/making-a-large-island/
// Language: javascript
// Runtime: 323 ms
// Memory: 97.3 MB
// Submitted: 2023-08-01

cl = console.log
class UnionFind {
    constructor(n, clone) {
        if (clone) {
            this.o = [...clone.o]
            this.osize = [...clone.osize]
        } else {
            this.o = Array.from({ length: n }, (_, i) => i);
            this.osize = new Array(n).fill(1);
        }
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
    findval(u) {
        return this.osize[this.find(u)]
    }
    getMax() {
        return Math.max(...Object.values(this.osize));
    }

    getosize() {
        return this.osize
    }

    print() {
        let cl = console.log
        cl(this.o);
        cl(this.osize);
        cl()
    }
}
let sides = [
    [-1, 0], //   N
    [0, -1], //   W
    [0, 1], //    E
    [1, 0], //    S
];
const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;


var largestIsland = function (grid) {
    let g = grid
    let m = grid.length;
    let n = grid[0].length;
    let uf = new UnionFind(m * n)

    let max = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                for (let [si, sj] of sides) {
                    if (!matrixOutOfBounds(i + si, j + sj, m, n)) {
                        if (grid[i + si][j + sj] === 1) {
                            uf.union(i * n + j, (i + si) * n + (j + sj))
                        }
                    }
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!grid[i][j]) {
                let set = new Set()
                for (let [si, sj] of sides) {
                    if (!matrixOutOfBounds(i + si, j + sj, m, n)) {
                        if (grid[i + si][j + sj] === 1) {
                            let u = i + si
                            let v = j + sj
                            set.add(uf.find(u * n + v))
                        }
                    }
                }
                let an = 1

                for (let e of set) {
                    an += uf.findval(e)
                }

                max = Math.max(an, max)
            }
        }
    }
    // uf.print()
    return max || n * n
};
/**
[
[1,0],
[0,1]
]

 */
