// Problem: Tree Diameter
// LeetCode: https://leetcode.com/problems/tree-diameter/
// Language: javascript
// Runtime: 68 ms
// Memory: 57.7 MB
// Submitted: 2024-05-02

cl = console.log
/**
 * @param {number[][]} edges
 * @return {number}
 */
var treeDiameter = function (edges) {
    if(!edges.length) return 0
    let n = edges.length + 1
    let g = new Graph(n)
    g.build(edges)

    console.log(g.in_deg)
    let x = g.topologicalSort()


    return x
};

class Graph {
    constructor(n) {
        this.g = Array.from({ length: n }, (_) => []);
        this.in_deg = this.out_deg = new Array(n).fill(0);
        this.n = n;
    }

    build(edges) {
        for (let [u, v] of edges) {
            this.g[u].push(v);
            this.in_deg[v]++;

            this.in_deg[u]++;
            this.g[v].push(u);
        }
    }

    get_cycle_nodes(g = this.g, indeg = [...this.in_deg]) {
        let n = indeg.length;
        const queue = [];

        for (let u = 0; u < n; u++) {
            if (indeg[u] === 1) queue.push(u);
        }

        while (queue.length) {
            let u = queue.shift();
            for (let v of g[u]) {
                if (indeg[v] === 1) continue;
                indeg[v]--;
                if (indeg[v] === 1) {
                    queue.push(v);
                }
            }
        }

        let cycle = new Set();
        for (let u = 0; u < n; u++) {
            if (indeg[u] > 1) cycle.add(u);
        }
        return cycle;
    }

    get_distance_from_cycle(g = this.g, indeg = [...this.in_deg]) {
        let cycle_nodes = this.get_cycle_nodes();
        let dist_from_cycle = new Array(this.n).fill(0);
        const queue = [...cycle_nodes];
        let vis = new Set();

        while (queue.length) {
            let u = queue.shift();
            vis.add(u);
            for (let v of g[u]) {
                if (vis.has(v)) continue;
                if (cycle_nodes.has(v)) continue;
                dist_from_cycle[v] += dist_from_cycle[u] + 1;

                queue.push(v);
            }
        }

        return dist_from_cycle;
    }

    dfs(u, p = -1) {


        let an = 0
        for (let v of this.g[u]) {
            if (v === p) continue
            an = Math.max(an, 1 + this.dfs(v, u))
        }

        return an
    }

    bfs(u) {
        let q = [[u]]
        let level = -1
        while (q.length) {
            let size = q.length
            for (let i = 0; i < size; i++) {
                let [u, p] = q.shift()
                for (let v of this.g[u]) {
                    if (v === p) continue
                    q.push([v, u])
                }
            }
            level++
        }

        return level
    }

    topologicalSort(g = this.g, indeg = [...this.in_deg]) {
        let n = indeg.length;
        const queue = [];

        for (let u = 0; u < n; u++) {
            if (indeg[u] === 1) queue.push(u);
        }

        let an = [];
        let diameter = -1
        let prev_size
        while (queue.length) {
            let size = queue.length
            for (let i = 0; i < size; i++) {
                let u = queue.shift();
                for (let v of g[u]) {
                    indeg[v]--;
                    if (indeg[v] === 1) {
                        queue.push(v);
                    }
                }
                indeg[u] = -1
                an.push(u);
                prev_size = size
            }

            diameter+=2
        }

        return prev_size === 1 ? diameter - 1 : diameter

        for (let u = 0; u < n; u++) {
            if (indeg[u] > 0) return [];
        }

        return an;
    };

}

