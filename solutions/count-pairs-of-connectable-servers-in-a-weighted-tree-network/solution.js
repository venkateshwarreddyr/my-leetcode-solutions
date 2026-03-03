// Problem: Count Pairs of Connectable Servers in a Weighted Tree Network
// LeetCode: https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/
// Language: javascript
// Runtime: 306 ms
// Memory: 58.1 MB
// Submitted: 2024-04-16

/**
 * @param {number[][]} edges
 * @param {number} signalSpeed
 * @return {number[]}
 */
var countPairsOfConnectableServers = function (edges, signalSpeed) {
    let n = edges.length + 1
    let g = Array.from({ length: n }, () => []);
    for (let [u, v, c] of edges) {
        g[u].push([v, c]);
        g[v].push([u, c]);
    }
    let vis = new Array(n)
    function dfs_(u, p, sum) {
        let count = (sum % signalSpeed === 0) ? 1 : 0

        for (let [v, c] of g[u]) {
            if (p === v) continue;
            count += dfs_(v, u, sum + c)
        }

        return count
    }


    let an = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        let res = 0, node_count = 0
         for (let [v, c] of g[i]) {
            let t = dfs_(v, i, c)
            res += (t * node_count)
            node_count+=t
         }
        an[i] = res
    }

    return an
};
