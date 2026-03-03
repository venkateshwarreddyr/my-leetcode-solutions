// Problem: Reachable Nodes With Restrictions
// LeetCode: https://leetcode.com/problems/reachable-nodes-with-restrictions/
// Language: javascript
// Runtime: 255 ms
// Memory: 99.4 MB
// Submitted: 2023-06-23

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, rest) {
    let g = [...new Array(n)].map((_, i) => i);
    rest = new Set(rest);
    
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
        if (rest.has(u) || rest.has(v)) continue;
        union(u, v)
    }

    let c = 0

    for (let u = 0; u < n; u++) {
        if (find(u) === 0) c++
    }

    return c
};
