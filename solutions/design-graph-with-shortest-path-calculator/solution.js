// Problem: Design Graph With Shortest Path Calculator
// LeetCode: https://leetcode.com/problems/design-graph-with-shortest-path-calculator/
// Language: javascript
// Runtime: 362 ms
// Memory: 59.6 MB
// Submitted: 2023-08-23

/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function (n, edges) {
    let g = Array.from({ length: n }, () => [])

    Graph.prototype.addEdge = function ([u, v, c]) {
        g[u].push([v, c])
    };

    for (let edge of edges) {
        this.addEdge(edge)
    }


    Graph.prototype.shortestPath = function (s, d) {

        let q = [s]
        let vis = new Array(n).fill(Infinity)
        vis[s] = 0
        while (q.length) {
            let u = q.shift()

            for (let [v, c] of g[u]) {
                if (vis[v] > vis[u] + c) {
                    vis[v] = vis[u] + c
                    q.push(v)
                }
            }
        }
        if (vis[d] !== Infinity) return vis[d]
        return -1
    };
};

