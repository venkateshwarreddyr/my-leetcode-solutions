// Problem: Count Unreachable Pairs of Nodes in an Undirected Graph
// LeetCode: https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/
// Language: javascript
// Runtime: 284 ms
// Memory: 92.3 MB
// Submitted: 2023-06-23

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function (n, edges) {
    cl = console.log
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

    for (let [u, v] of edges) {
        union(u, v)
    }

    let obj = {}
    for (let u = 0; u < n; u++) {
        let x = find(u)
        obj[x] = (obj[x] || 0) + 1
    }

    let vals = Object.values(obj);

    let an = 0
    for (let value of vals) {
        an += ((n - value) * value)
        // cl(an)
    }

    return an/2;
};
