// Problem: Node With Highest Edge Score
// LeetCode: https://leetcode.com/problems/node-with-highest-edge-score/
// Language: javascript
// Runtime: 162 ms
// Memory: 55.3 MB
// Submitted: 2023-06-23

/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function (edges) {
    let n = edges.length;

    let g = Array.from({ length: n }, () => 0)
    for (let u = 0; u < n; u++) {
        g[edges[u]] += u
    }

    let max = 0
    let ind = 0
    for (let u = 0; u < n; u++) {
        if (g[u] > max) {
            max = g[u]
            ind = u
        }
    }

    return ind
};
