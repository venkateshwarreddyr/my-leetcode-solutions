// Problem: Greatest Common Divisor Traversal
// LeetCode: https://leetcode.com/problems/greatest-common-divisor-traversal/
// Language: javascript
// Runtime: 370 ms
// Memory: 67.6 MB
// Submitted: 2023-08-03

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
        let cl = console.log
        cl(this.o);
        cl(this.osize);
    }

    has(u) {
        return this.osize[u]
    }
}


var canTraverseAllPairs = function (a) {
    if (a.length === 1) return true
    if (a.includes(1)) return false
    let aset = new Set(a)
    a = [...aset]
    let max = Math.max(...a) + 1
    let uf = new UnionFind(max)
    cl(a)
    for (let i = 2; i < max; i++) {
        let x = i
        while (x < max) {
            if (aset.has(x)) {
                uf.union(i, x)
            }
            x += i
        }
    }

    let set = new Set()
    for (let e of a) {
        set.add(uf.find(e))
    }
    return (set.size === 1)
};
