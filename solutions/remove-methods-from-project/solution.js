// Problem: Remove Methods From Project
// LeetCode: https://leetcode.com/problems/remove-methods-from-project/
// Language: javascript
// Runtime: 1541 ms
// Memory: 131.1 MB
// Submitted: 2024-10-06

/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function (n, k, invocations) {
    let g = new Graph(n);
    g.build(invocations);
    let sus = g.bfs(k);
    let non_sus = new Set();
    let uf = new UnionFind(n)
    uf.build(invocations)
    let an = []
    for (let i = 0; i < n; i++) {
        if (sus.has(i)) continue;
        non_sus.add(i)
    }

    for(let e of non_sus) {
        if(uf.find(e) === uf.find(k)) {
            let an = []
            for(let i = 0; i<n ;i++) {
                an.push(i)
            }

            return an
        }
    }

    return [...non_sus]
};


class Graph {
    constructor(n) {
        this.g = Array.from({ length: n }, (_) => []);
        this.in_deg = new Array(n).fill(0);
        this.n = n
    }

    build(edges) {
        for (let [u, v] of edges) {
            this.g[u].push(v)
            this.in_deg[v]++
        }
    }

    vis = Array.from({ length: this.n });
    visinpath = Array.from({ length: this.n });

    hasCycle(u) {
        if (this.visinpath[u]) return 1;
        if (!this.vis[u]) {
            this.vis[u] = 1;
            this.visinpath[u] = 1;
            for (let v of (this.g[u] ?? [])) {
                if (this.hasCycle(v)) {
                    return 1;
                }
            }
            this.visinpath[u] = 0;
        }
    }

    has_cycle_dfs(u) {
        this.vis = Array.from({ length: this.n });
        this.visinpath = Array.from({ length: this.n });

        return this.hasCycle(u)
    }

    topologicalSort(g, indeg) {
        let n = indeg.length;
        const queue = [];

        for (let u = 0; u < n; u++) {
            if (indeg[u] === 0) queue.push(u);
        }

        let an = [];
        while (queue.length) {
            let u = queue.shift();

            for (let v of g[u]) {
                indeg[v]--;
                if (indeg[v] === 0) {
                    queue.push(v);
                }
            }
            indeg[u] = -1;
            an.push(u);
        }

        for (let u = 0; u < n; u++) {
            if (indeg[u] > 0) return [];
        }

        return an;
    };


    find_levels(g = this.g, indeg = [...this.in_deg]) {
        let n = indeg.length;
        let queue = [];
        let level = 0;
        let visited = 0;

        for (let u = 0; u < n; u++) {
            if (indeg[u] === 0) queue.push(u);
        }

        while (queue.length) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let u = queue.shift();
                visited++
                for (let v of g[u]) {
                    indeg[v]--;
                    if (indeg[v] === 0) {
                        queue.push(v);
                    }
                }
            }

            level++
        }

        if (visited === n)
            return level;
        return -1
    }

    bfs(s) {
        let q = [s]
        let vis = new Set()
        let sus = new Set()
        while (q.length) {
            let u = q.shift()
            vis.add(u);
            sus.add(u)
            for (let v of this.g[u]) {
                if (vis.has(v)) continue;
                q.push(v)
            }
        }

        return sus
    }

    visited_in_path = {}
    memo = {}
    dfs_(s, d) {
        if (d === s) {
            if (this.g[s].length) return this.memo[s] = false
            return this.memo[s] = true
        }
        let an = undefined
        let u = s
        if (this.memo[u] !== undefined) return this.memo[u]
        this.visited_in_path[u] = true

        for (let v of this.g[u]) {
            if (this.visited_in_path[v]) return this.memo[u] = false
            an = (an ?? true) && this.dfs_(v, d)
        }

        this.visited_in_path[u] = false
        this.memo[u] = an === undefined ? false : an
        return this.memo[u]
    }

    dfs(s, d) {
        this.visited_in_path = {}
        this.memo = {}
        this.dfs_(s, d)
        console.log(this.memo)
        for (let key in this.memo) {
            if (!this.memo[key]) return false
        }

        return true
    }
}

class UnionFind {
    constructor(n) {
        this.o = Array.from({ length: n }, (_, i) => i);
        this.osize = new Array(n).fill(1);
    }

    build(edges) {
        for (let [u, v] of edges) {
            this.union(u, v);
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

    getRootCount() {
        let cc = 0;
        for (let i = 0; i < this.o.length; i++) {
            if (this.find(i) === i) {
                cc++;
            }
        }

        return cc;
    }
}

