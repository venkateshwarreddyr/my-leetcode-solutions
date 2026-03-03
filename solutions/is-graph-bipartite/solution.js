// Problem: Is Graph Bipartite?
// LeetCode: https://leetcode.com/problems/is-graph-bipartite/
// Language: javascript
// Runtime: 83 ms
// Memory: 44.9 MB
// Submitted: 2023-05-18

cl = console.log
var isBipartite = function (graph) {
    let n = graph.length;
    let g = [...new Array(n)].map((_, i) => i);

    const find = (a) => {
        return a === g[a] ? a : find(g[a]);
    };

    const union = (a, b) => {
        let u = find(a);
        let v = find(b);

        if (u > v) {
            g[u] = v;
        } else if (u < v) {
            g[v] = u;
        }
    };

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            if (find(i) === find(graph[i][j])) return false;
            union(graph[i][0], graph[i][j])
        }
    }

    return true;
};
