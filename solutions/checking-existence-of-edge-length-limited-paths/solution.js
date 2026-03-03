// Problem: Checking Existence of Edge Length Limited Paths
// LeetCode: https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/
// Language: javascript
// Runtime: 359 ms
// Memory: 107.3 MB
// Submitted: 2023-08-05

cl = console.log
class UnionFind {
    constructor(n) {
        this.o = Array.from({ length: n }, (_, i) => i);
        this.osize = new Array(n).fill(1);
        this.dist2o = new Array(n).fill(0);
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

    weighted_union(u, v, w) {
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
        this.dist2o[u] = this.dist2o[u] || w
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
        cl(this.dist2o);
    }
}

var distanceLimitedPathsExist = function (n, edgeList, queries) {
    edgeList.sort((a, b) => a[2] - b[2])
    queries = queries.map((e, i) => [...e, i]).sort((a, b) => a[2] - b[2]);
    let an = []

    let uf = new UnionFind(n)

    let j = 0;
    for (let [p, q, limit, i] of queries) {
        while (j < edgeList.length && edgeList[j][2] < limit) {
            const [u, v] = edgeList[j];
            uf.union(u, v);
            j++;
        }
        an[i] = uf.find(p) === uf.find(q);
    }

    return an;

};
