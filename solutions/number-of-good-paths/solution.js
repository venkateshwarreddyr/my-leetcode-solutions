// Problem: Number of Good Paths
// LeetCode: https://leetcode.com/problems/number-of-good-paths/
// Language: javascript
// Runtime: 536 ms
// Memory: 181.7 MB
// Submitted: 2023-08-12

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

var numberOfGoodPaths = function (vals, edges) {
    let n = vals.length;

    let g = Array.from({ length: n }, () => []);
    for (let [i, j] of edges) {
        g[i].push(j);
        g[j].push(i);
    }
    // g = [  [1,2], [0], [0,3,4], [2], [2]  ]

    let sortedUniqueVals = [...new Set(vals)].sort((a, b) => a - b)

    let val2Indexes = {};
    for (let i = 0; i < n; i++) {
        let val = vals[i]
        val2Indexes[val] = val2Indexes[val] || [];
        val2Indexes[val].push(i);
    }

    let tcc = 0;
    let visAll = new Array(n).fill(0)
    let uf = new UnionFind(n)

    for (let val of sortedUniqueVals) {
        for (let u of val2Indexes[val]) {
            visAll[u] = 1;
            for (let v of g[u]) {
                if (visAll[v]) {
                    uf.union(u, v);
                }
            }
        }
        let occ = {};
        for (let u of val2Indexes[val]) {
            let r1 = uf.find(u);
            occ[r1] = occ[r1] || 0
            occ[r1]++;
        }
        for (let cc of Object.values(occ)) {
            tcc += (cc * (cc + 1)) / 2;
        }
    }

    return tcc;
}

