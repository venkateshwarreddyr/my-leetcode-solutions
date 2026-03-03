// Problem: Last Day Where You Can Still Cross
// LeetCode: https://leetcode.com/problems/last-day-where-you-can-still-cross/
// Language: javascript
// Runtime: 1064 ms
// Memory: 80.2 MB
// Submitted: 2025-12-31

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

    findVal(u) {
        return this.osize[this.find(u)];
    }

    getMax() {
        return Math.max(...Object.values(this.osize));
    }

    print() {
        cl(this.o);
        cl(this.osize);
    }
}


var latestDayToCross = function (row, col, cells) {
    let m = row, n = col
    let ob = {}
    let uf = new UnionFind(m * n)
    let sides = [
        [-1, 0], //   N
        [0, -1], //   W
        [0, 1], //    E
        [1, 0], //    S
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
    ];
    const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;

    let set = new Set()
    let k = 0
    for (let [i, j] of cells) {
        i--
        j--
        ob[i * n + j] = 1
        for (let [si, sj] of sides) {
            let u = i + si
            let v = j + sj
            if (!matrixOutOfBounds(u, v, m, n)) {
                if (ob[u * n + v]) { uf.union(i * n + j, u * n + v) }
            }
        }

        for (let l = 0; l < m; l++) {
            // cl(l * n)
            set.add(uf.find(l * n))
        }
        // cl(set)
        for (let l = 0; l < m; l++) {
            // cl(l * n + n - 1, set)
            if (set.has(uf.find(l * n + n - 1))) {
                return k
            }
        }
        k++
    }


};
