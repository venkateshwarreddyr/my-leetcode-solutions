// Problem: Remove Max Number of Edges to Keep Graph Fully Traversable
// LeetCode: https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/
// Language: javascript
// Runtime: 204 ms
// Memory: 86.8 MB
// Submitted: 2024-06-30

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

        if (u === v) return 0

        if (this.osize[u] < this.osize[v]) {
            ;[u, v] = [v, u]
        } else if (this.osize[u] === this.osize[v] && u < v) {
            ;[u, v] = [v, u]
        }
        this.o[u] = v;
        this.osize[v] += this.osize[u];

        return 1
    }

    find(u) {
        if (u !== this.o[u]) {
            this.o[u] = this.find(this.o[u]);
        }

        return this.o[u];
    }

    getMax() {
        return Math.max(...Object.values(this.osize))
    }

    print() {
        cl(this.o)
        cl(this.osize)
    }

}

var maxNumEdgesToRemove = function (n, edges) {

    let alice = new UnionFind(n + 1)
    let bob = new UnionFind(n + 1)
    let cc = 0


    for (let [x, u, v] of edges) {
        if (x === 3) {
            if (alice.union(u, v) && bob.union(u, v)) {
                // good
            } else {
                cc++
            }
        }
    }
    for (let [x, u, v] of edges) {
        if (x === 1) {
            if (alice.union(u, v)) {
                // good
            } else {
                cc++
            }
        } else if (x === 2) {
            if (bob.union(u, v)) {
                // good
            } else {
                cc++
            }
        }
    }


    if (alice.getMax() === n && bob.getMax() === n)
        return cc
    return -1
};
