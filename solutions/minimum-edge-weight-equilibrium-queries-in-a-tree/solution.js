// Problem: Minimum Edge Weight Equilibrium Queries in a Tree
// LeetCode: https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/
// Language: javascript
// Runtime: 936 ms
// Memory: 94.4 MB
// Submitted: 2023-09-18

cl = console.log
var minOperationsQueries = function (n, edges, queries) {
    const g = new Array(n).fill().map(() => [])
    for (let [u, v, w] of edges) {
        w--
        g[u].push([v, w])
        g[v].push([u, w])
    }

    const parent = new Array(n).fill(-1)
    const cost = new Array(n).fill(null)
    const depth = new Array(n).fill(0)

    function dfs(u, p, w) {
        parent[u] = p
        cost[u] = [...cost[p]]
        cost[u][w] += 1
        depth[u] = depth[p] + 1
        for (const [v, cost] of g[u]) {
            if (parent[v] === -1) {
                dfs(v, u, cost)
            }
        }
    }

    cost[0] = new Array(26).fill(0)
    dfs(0, 0, 1)
    const result = []
    for (const [i, j] of queries) {
        let a = i
        let b = j
        while (depth[a] > depth[b]) {
            a = parent[a]
        }
        while (depth[a] < depth[b]) {
            b = parent[b]
        }

        while (a !== b) {
            a = parent[a]
            b = parent[b]
        }

        const s = []
        for (let k = 0; k < 26; k++) {
            s[k] = cost[i][k] + cost[j][k] - 2 * cost[a][k]
        }
        let sumS = 0
        let maxS = -Infinity
        for (const val of s) {
            sumS += val
            if (val > maxS) {
                maxS = val
            }
        }

        result.push(sumS - maxS)
    }

    return result
}
