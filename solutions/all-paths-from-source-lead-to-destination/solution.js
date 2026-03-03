// Problem: All Paths from Source Lead to Destination
// LeetCode: https://leetcode.com/problems/all-paths-from-source-lead-to-destination/
// Language: javascript
// Runtime: 89 ms
// Memory: 58.8 MB
// Submitted: 2024-05-01

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function (n, edges, source, destination) {
    let g = new Graph(n);
    g.build(edges)
    return g.dfs(source, destination)
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

    bfs(s, d) {
        let q = [s]
        let vis = new Set()

        while (q.length) {
            let u = q.shift()
            vis.add(u);

            for (let v of this.g[u]) {
                if (vis.has(v)) continue;
                q.push(v)
            }
        }

        return vis.has(d)
    }

    visited_in_path = {}
    memo = {}
    dfs_(s, d) {
        if (d === s){
            if(this.g[s].length) return this.memo[s] = false
             return this.memo[s] = true
        }
        let an = undefined
        let u = s
        if(this.memo[u] !== undefined) return this.memo[u]
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

/**
    0 -> 1 -> 2

    0 -> 1 -> 2 -> 3 -> 4

 */
