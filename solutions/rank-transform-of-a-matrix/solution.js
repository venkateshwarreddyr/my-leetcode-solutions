// Problem: Rank Transform of a Matrix
// LeetCode: https://leetcode.com/problems/rank-transform-of-a-matrix/
// Language: javascript
// Runtime: 696 ms
// Memory: 127.4 MB
// Submitted: 2023-08-16

cl = console.log
class UnionFind {
    constructor(n, rank) {
        this.o = Array.from({ length: n }, (_, i) => i);
        this.osize = new Array(n).fill(1);
        this.orank = rank
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
        this.orank[v] = Math.max(this.orank[u], this.orank[v])
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

    getRootCount() {
        let cc = 0;
        for (let i = 0; i < this.o.length; i++) {
            if (this.find(i) === i) {
                cc++;
            }
        }

        return cc;
    }

    rootRank(i) {
        return this.orank[this.find(i)]
    }
}

var matrixRankTransform = function (g) {
    const m = g.length
    const n = g[0].length
    const o = {} //    a[R][C]  to  [ [R1,C1], [R2,C2] ]   mapping
    let set = new Set()
    for (let R = 0; R < m; R++) {
        for (let C = 0; C < n; C++) {
            const e = g[R][C]
            o[e] = o[e] || []
            o[e].push([R, C])
            set.add(e)
        }
    }
    let a = [...set].sort((a, b) => a - b) // sorted values
    const sumOfRowsAndCols = m + n

    let rank = new Array(sumOfRowsAndCols).fill(0)
    for (let e of a) {
        let uf = new UnionFind(sumOfRowsAndCols, [...rank])
        for (let [i, j] of o[e]) {
            uf.union(i, j + m)
        }

        for (let [i, j] of o[e]) {
            let x = uf.rootRank(i) + 1
            rank[i] = x
            rank[j + m] = x
            g[i][j] = x
        }
    }

    return g
}
