// Problem: All Nodes Distance K in Binary Tree
// LeetCode: https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
// Language: javascript
// Runtime: 58 ms
// Memory: 57.9 MB
// Submitted: 2025-11-07

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
    let root2 = null
    function dfs1(node, parent) {
        if (!node) return
        node.parent = parent
        if (node.val === target.val) root2 = node
        dfs1(node.left, node)
        dfs1(node.right, node)
    }
    dfs1(root, null)
    let vis = new Set()
    let ans = []
    function dfs2(node, level) {
        if (!node) return
        if(vis.has(node.val)) return
        vis.add(node.val)
        if (level === k) {
            ans.push(node.val)
            return
        }
        dfs2(node.parent, level + 1)
        dfs2(node.left, level + 1)
        dfs2(node.right, level + 1)
    }
    dfs2(root2, 0)
    return ans
};
