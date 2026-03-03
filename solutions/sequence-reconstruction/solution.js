// Problem: Sequence Reconstruction
// LeetCode: https://leetcode.com/problems/sequence-reconstruction/
// Language: javascript
// Runtime: 572 ms
// Memory: 74.8 MB
// Submitted: 2024-05-03

/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */
var sequenceReconstruction = function (nums, sequences) {
    let g = new Graph(nums.length)
    g.build(sequences)

    let seq = g.topologicalSort()
    console.log({ seq, nums })
    return seq
};



class Graph {
    constructor(n) {
        this.g = Array.from({ length: n }, (_) => []);
        this.in_deg = new Array(n).fill(0);
        this.n = n
    }

    build(edges) {

        for (let edges1 of edges) {
            for (let i = 1; i < edges1.length; i++) {
                let u = edges1[i - 1]
                let v = edges1[i]
                u--
                v--
                this.g[u].push(v)
                this.in_deg[v]++
            }
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

    topologicalSort(g = this.g, indeg = [...this.in_deg]) {
        let n = indeg.length;
        const queue = [];

        for (let u = 0; u < n; u++) {
            if (indeg[u] === 0) queue.push(u);
        }

        let an = [];
        let level = 0;
        while (queue.length) {
            let size = queue.length;
            console.log(queue)
            for (let i = 0; i < size; i++) {
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

            level++;
        }
        console.log(level)
        for (let u = 0; u < n; u++) {
            if (indeg[u] > 0) return false;
        }

        return level === this.n;
    }


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


/**

    1 -> 2   3
     \-------/

 */
