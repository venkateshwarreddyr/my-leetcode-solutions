// Problem: Graph Connectivity With Threshold
// LeetCode: https://leetcode.com/problems/graph-connectivity-with-threshold/
// Language: javascript
// Runtime: 124 ms
// Memory: 62.5 MB
// Submitted: 2023-08-04

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
}

var areConnected = function (n, threshold, queries) {
    let uf = new UnionFind(n + 1)

    for (let i = threshold + 1; i <= n; i++) {
        let x = i
        while (x <= n) {
            uf.union(x, i)
            x += i
        }
    }

    return queries.map(([u, v]) => uf.find(u) === uf.find(v))
};
