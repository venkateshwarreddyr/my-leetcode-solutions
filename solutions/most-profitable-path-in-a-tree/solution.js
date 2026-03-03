// Problem: Most Profitable Path in a Tree
// LeetCode: https://leetcode.com/problems/most-profitable-path-in-a-tree/
// Language: javascript
// Runtime: 330 ms
// Memory: 124.7 MB
// Submitted: 2023-09-06

cl = console.log
var mostProfitablePath = function (edges, bob, amount) {
    let n = amount.length
    let g = Array.from({ length: n }, () => []);
    for (let [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }

    let parent = new Array(n)
    let dist = new Array(n)
    function assignParent(u, p, d) {
        dist[u] = d
        parent[u] = p
        for (let v of g[u]) {
            if (v === p) continue
            assignParent(v, u, d + 1)
        }
    }

    assignParent(0, -1, 0)

    let curr = bob
    let bob_dist = 0

    while (curr !== 0) {
        if (dist[curr] > bob_dist) {
            amount[curr] = 0
        } else if (dist[curr] === bob_dist) {
            amount[curr] /= 2
        }
        curr = parent[curr]
        bob_dist++
    }

    function dfs(u, p) {
        let ret = amount[u]
        let maxcc = -Infinity
        for (let v of g[u]) {
            if (v === p) continue
            maxcc = Math.max(maxcc, dfs(v, u))
        }
        if (maxcc === -Infinity) return ret
        return maxcc + ret
    }

    return dfs(0, -1)
};
