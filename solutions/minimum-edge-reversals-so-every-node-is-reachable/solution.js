// Problem: Minimum Edge Reversals So Every Node Is Reachable
// LeetCode: https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/
// Language: javascript
// Runtime: 1618 ms
// Memory: 238.9 MB
// Submitted: 2023-09-16

cl = console.log
var minEdgeReversals = function (n, edges) {
    let g = Array.from({ length: n }, () => [])
    let g1 = Array.from({ length: n }, () => [])

    for (let [u, v] of edges) {
        g[u].push(v)
        g1[v].push(u)
    }
    let memo = Array.from({ length: n }, () => ({}))
    function dfs(u, p) {
        if (memo[u][p] !== undefined) return memo[u][p]
        let sum = 0
        for (let v of g[u]) {
            if (v === p) continue
            sum += dfs(v, u)
        }
        for (let v of g1[u]) {
            if (v === p) continue
            sum += 1 + dfs(v, u)
        }
        memo[u][p] = sum
        return sum
    }

    let an = []
    for (let u = 0; u < n; u++) {
        an.push(dfs(u, -1))
    }

    return an
}
