// Problem: Find Center of Star Graph
// LeetCode: https://leetcode.com/problems/find-center-of-star-graph/
// Language: javascript
// Runtime: 128 ms
// Memory: 57.9 MB
// Submitted: 2023-06-22

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    let n = edges.length + 1
    let indeg = Array.from({ length: n + 1 }).fill(0);
    for (let [u, v] of edges) {
        indeg[v]++;
        indeg[u]++;
    }

    for (let i = 1; i <= n; i++) {
        if (indeg[i] === n - 1) {
            return i
        }
    }
};
