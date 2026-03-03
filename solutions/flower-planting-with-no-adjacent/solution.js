// Problem: Flower Planting With No Adjacent
// LeetCode: https://leetcode.com/problems/flower-planting-with-no-adjacent/
// Language: javascript
// Runtime: 158 ms
// Memory: 59 MB
// Submitted: 2023-06-21

/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, edges) {
    cl = console.log
    let g = Array.from({ length: n }, () => [])

    for (let [u, v] of edges) {
        g[u - 1].push(v - 1);
        g[v - 1].push(u - 1);
    }

    let an = new Array(n)

    let visited = new Array(n)
    function dfs(u) {
        let q = [[u, 0]];

        while (q.length) {
            let [u, p] = q.shift();
            if (visited[u] !== undefined) {
                continue;
            }

            an[u] = p
            visited[u] = p;

            let i = 1
            for (let v of g[u]) {
                let x = ((p + i) % 4)
                if (visited[v] === p) {
                    visited[v] = undefined
                }
                q.push([v, x]);
                i++
            }
        }
    }

    for (let u = 0; u < n; u++) {
        if (!visited[u]) {
            dfs(u)
        }
    }

    return an.map(e => e + 1);
};
