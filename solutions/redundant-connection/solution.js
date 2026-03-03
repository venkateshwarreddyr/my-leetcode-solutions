// Problem: Redundant Connection
// LeetCode: https://leetcode.com/problems/redundant-connection/
// Language: javascript
// Runtime: 67 ms
// Memory: 44.3 MB
// Submitted: 2023-05-16

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {

    let g = [...new Array(1001)].map((_, i) => i);
    let an = [];

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

    for (let [a, b] of edges) {
        if (find(a) !== find(b)) {
            union(a, b)
        } else {
            an = [a, b];
            break;
        }
    }

    return an;
};
