// Problem: Maximum Number of K-Divisible Components
// LeetCode: https://leetcode.com/problems/maximum-number-of-k-divisible-components/
// Language: javascript
// Runtime: 55 ms
// Memory: 83.6 MB
// Submitted: 2025-11-28

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function (n, edges, values, k) {
    let graph = new Graph(n, edges, true, values, k)
    graph.dfsfn(0)
    return graph.cc
};

cl = console.log;

class Graph {
    constructor(n, edges, undirected = false, values, k) {
        this.g = Array.from({ length: n }, () => new Array());
        this.memo = {}
        this.values = values
        for (let [u, v] of edges) {
            this.g[u].push(v);
            if (undirected) {
                this.g[v].push(u);
            }
        }
        this.k = k
    }
    cc = 0
    dfs(u, p) {

        let sum = this.values[u]
        for (let v of this.g[u]) {
            if (v === p) continue
            sum += this.dfs(v, u)
        }
        if (sum % this.k === 0) {
            this.cc++
            return 0
        }
        return sum
    }

    dfsfn() {
        return this.dfs(0, -1, this.values[0])
    }
}
