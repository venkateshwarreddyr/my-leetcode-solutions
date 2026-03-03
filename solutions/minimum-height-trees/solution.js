// Problem: Minimum Height Trees
// LeetCode: https://leetcode.com/problems/minimum-height-trees/
// Language: javascript
// Runtime: 99 ms
// Memory: 77.8 MB
// Submitted: 2025-07-04

var findMinHeightTrees = function (n, edges) {
    if (!edges || n < 2) return [0]

    let g = []

    // Construct the adjacency list
    for (let [u, v] of edges) {
        g[u] = g[u] || []
        g[v] = g[v] || []
        g[u].push(v)
        g[v].push(u)
    }

    let leaves = []

    // Initialize leaf nodes
    g.map((neighbors, u) => neighbors.length === 1 && leaves.push(u))

    while (n > 2) {
        n = n - leaves.length
        let nextLeaves = []

        for (let leaf of leaves) {
            // Remove the leaf node and its reference in related nodes
            let neighbor = g[leaf].pop()
            g[neighbor].splice(g[neighbor].indexOf(leaf), 1)

            // Save new leaf nodes
            if (g[neighbor].length === 1) {
                nextLeaves.push(neighbor)
            }
        }

        leaves = nextLeaves
    }

    return leaves
}
