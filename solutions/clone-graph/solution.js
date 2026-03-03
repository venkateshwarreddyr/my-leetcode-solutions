// Problem: Clone Graph
// LeetCode: https://leetcode.com/problems/clone-graph/
// Language: javascript
// Runtime: 59 ms
// Memory: 43.9 MB
// Submitted: 2023-08-23

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
cl = console.log
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node, vis = []) {
    if (!node) return node
    if (vis[node.val]) return vis[node.val]
    vis[node.val] = new Node(node.val)
    let neighbors = []
    for (let neighbour of node.neighbors) {
        neighbors.push(cloneGraph(neighbour, vis))
    }
    vis[node.val].neighbors = neighbors

    return vis[node.val]
};
