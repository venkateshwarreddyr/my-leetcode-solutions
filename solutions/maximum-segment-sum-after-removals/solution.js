// Problem: Maximum Segment Sum After Removals
// LeetCode: https://leetcode.com/problems/maximum-segment-sum-after-removals/
// Language: javascript
// Runtime: 198 ms
// Memory: 108.8 MB
// Submitted: 2023-08-04

cl = console.log
class UnionFind {
    constructor(n) {
        this.o = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
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

        if (this.rank[u] < this.rank[v]) {
            [u, v] = [v, u];
        } else if (this.rank[u] === this.rank[v] && u < v) {
            [u, v] = [v, u];
        }
        this.o[u] = v;
        this.rank[v] += this.rank[u];

        return 1;
    }

    find(u) {
        if (u !== this.o[u]) {
            this.o[u] = this.find(this.o[u]);
        }

        return this.o[u];
    }

    findVal(u) {
        return this.rank[this.find(u)];
    }

    getMax() {
        return Math.max(...Object.values(this.rank));
    }

    print() {
        let cl = console.log;
        cl(this.o);
        cl(this.rank);
    }
}


var maximumSegmentSum = function (nums, removeQueries) {
    let n = nums.length
    let uf = new UnionFind(n)
    let a = uf.rank
    let an = []
    let max = 0
    for (let j = n - 1; j > -1; j--) {
        an.push(max)
        let x = removeQueries[j]
        a[x] = nums[x]
        if (a[x - 1]) {
            uf.union(x, x - 1)
        }
        if (a[x + 1]) {
            uf.union(x, x + 1)
        }
        max = Math.max(max, a[uf.find(x)])
    }

    return an.reverse()
};
