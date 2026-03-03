// Problem: Parallel Courses
// LeetCode: https://leetcode.com/problems/parallel-courses/
// Language: javascript
// Runtime: 78 ms
// Memory: 56.3 MB
// Submitted: 2024-05-01

/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function (n, relations) {
    let g = new Graph(n);
    g.build(relations);

    return g.find_levels()
};

class Graph {
    constructor(n) {
        this.g = Array.from({ length: n }, (_) => []);
        this.in_deg = new Array(n).fill(0)

    }

    build(edges) {
        for (let [u, v] of edges) {
            u--
            v--
            this.g[u].push(v)
            this.in_deg[v]++
        }
    }

    has_cycle_dfs(u) {
        let vis = Array.from({ length: n });
        let visinpath = Array.from({ length: n });
        function hasCycle(u) {
            if (visinpath[u]) return 1;
            if (!vis[u]) {
                vis[u] = 1;
                visinpath[u] = 1;
                for (let v of g[u]) {
                    if (hasCycle(v)) {
                        return 1;
                    }
                }
                visinpath[u] = 0;
            }
        }

        return hasCycle(u)
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

        if(visited === n)
            return level;
        return -1
    }
}
