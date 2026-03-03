// Problem: Amount of Time for Binary Tree to Be Infected
// LeetCode: https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/
// Language: javascript
// Runtime: 160 ms
// Memory: 104.9 MB
// Submitted: 2025-06-29

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
    let startNode

    function dfsAddParents(n) {
        if (!n) return
        if (n.left) {
            n.left.parent = n
            dfsAddParents(n.left)
        }
        if (n.right) {
            n.right.parent = n
            dfsAddParents(n.right)
        }
        if (n.val === start) startNode = n
    }
    // const cl = console.log

    // cl(startNode)
    dfsAddParents(root)
    // cl(startNode)

    if (!startNode) return 0 // TODO: Infinity?

    let q = [startNode] // queue
    let v = new Set([startNode]) // set of visted nodes
    let level = 0 // time // TODO: -1? 
    while (q.length) {
        level++
        let levelLen = q.length // number of node at this level
        while (levelLen--) {
            let n = q.shift();
            [n.left, n.right, n.parent]
                .filter(adj => adj)
                .forEach(adj => {
                    if (!v.has(adj)) {
                        // not visited
                        q.push(adj)
                        v.add(adj)
                    }
                })
        }
    }
    return level - 1
};

