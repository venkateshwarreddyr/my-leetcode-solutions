// Problem: Shortest Path Visiting All Nodes
// LeetCode: https://leetcode.com/problems/shortest-path-visiting-all-nodes/
// Language: javascript
// Runtime: 85 ms
// Memory: 50 MB
// Submitted: 2023-09-17


var shortestPathLength = function (g) {
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    let n = g.length
    let allVis = (1 << n) - 1

    let vis = Array.from({ length: n }, () => new Array(allVis + 1))

    const pq = new PriorityQueue({ compare: (a, b) => a[2] - b[2] });
    let x = g.reduce((a, c) => Math.min(a, c.length), Infinity)

    for (let i = 0; i < n; i++) {
        pq.enqueue([i, 1 << i, 0])
    }

    while (!pq.isEmpty()) {
        let [u, pathbm, d] = pq.dequeue()
        if (allVis === pathbm) return d


        for (let v of g[u]) {
            let pathbmnew = pathbm | (1 << v)
            if (vis[v][pathbmnew]) continue
            pq.enqueue([v, pathbmnew, d + 1])
            vis[v][pathbmnew] = 1
        }
    }
};
