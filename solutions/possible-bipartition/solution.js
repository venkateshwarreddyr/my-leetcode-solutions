// Problem: Possible Bipartition
// LeetCode: https://leetcode.com/problems/possible-bipartition/
// Language: javascript
// Runtime: 150 ms
// Memory: 53.9 MB
// Submitted: 2023-05-18

// cl = console.log
var possibleBipartition = function (n, dislikes) {
    let g = [...new Array(n + 1)].map((_, i) => i);

    let graph = [...new Array(n + 1)].map(() => []);
    let bi = true; // bi-directional

    dislikes.forEach((edge) => {
        let [a, b] = edge;

        graph[a].push(b)
        graph[b].push(a)
    });
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

    for (let i = 1; i < graph.length; i++) {
        for (let j = 1; j < graph[i].length; j++) {
            if (find(i) !== find(graph[i][0])) {
                union(graph[i][0], graph[i][j])
            } else {
                return false;
            }
        }
    }

    return true
};
