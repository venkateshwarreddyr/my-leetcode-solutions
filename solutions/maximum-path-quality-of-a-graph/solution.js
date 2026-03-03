// Problem: Maximum Path Quality of a Graph
// LeetCode: https://leetcode.com/problems/maximum-path-quality-of-a-graph/
// Language: javascript
// Runtime: 159 ms
// Memory: 50.1 MB
// Submitted: 2023-08-26

cl = console.log

var maximalPathQuality = function (values, edges, maxTime) {
    let n = values.length
    let g = Array.from({ length: n }, () => []);

    for (let [u, v, c] of edges) {
        g[u].push([v, c])
        g[v].push([u, c])
    }

    function dfs() {
        let max = 0
        let vis = new Array(n).fill(0)
        function dfs_(u, maxTime, x) {
            if (u === 0) {
                max = Math.max(max, x)
            }
            vis[u]++
            for (let [v, c] of g[u]) {
                if (maxTime - c >= 0) {
                    dfs_(v, maxTime - c, vis[v] ? x : x + values[v]);
                }
            }
            vis[u]--
        }

        dfs_(0, maxTime, values[0])

        return max
    }

    return dfs()
};
