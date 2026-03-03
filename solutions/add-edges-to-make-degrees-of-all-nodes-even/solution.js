// Problem: Add Edges to Make Degrees of All Nodes Even
// LeetCode: https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/
// Language: javascript
// Runtime: 331 ms
// Memory: 122.7 MB
// Submitted: 2023-08-28

cl = console.log
const isPossible = function (n, edges) {
    // Create an adjacency list for the g
    let g = new Array(n).fill().map(() => new Set())

    // Populate the adjacency list using the edges
    for (let [u, v] of edges) {
        g[u - 1].add(v - 1)
        g[v - 1].add(u - 1)
    }

    // Store nodes with odd degree
    let nodesWithOddDegree = []
    for (let u = 0; u < g.length; u++) {
        if (g[u].size % 2 === 1) {
            nodesWithOddDegree.push(u)
        }
    }

    // Helper function to check if two nodes are connected
    let connected = (u, v) => g[v].has(u)
    cl(nodesWithOddDegree)
    if (nodesWithOddDegree.length === 2) {
        let [first, second] = nodesWithOddDegree
        // Check if there exists a node that is connected to both odd-degree nodes
        for (let u = 0; u < n; u++) {
            if (!connected(first, u) && !connected(second, u)) {
                return true
            }
        }
        return false
    } else if (nodesWithOddDegree.length === 4) {
        let [a, b, c, d] = nodesWithOddDegree
        // Check if there are pairs of odd-degree nodes that can be connected
        return (
            !connected(a, b) && !connected(c, d) ||
            !connected(a, c) && !connected(b, d) ||
            !connected(a, d) && !connected(c, b)
        )
    }

    // If there are no odd-degree nodes, the g is Eulerian
    return nodesWithOddDegree.length === 0
}
/**

    1 - 2
    3 - 4
    5 - 6
    7 - 8


 */
