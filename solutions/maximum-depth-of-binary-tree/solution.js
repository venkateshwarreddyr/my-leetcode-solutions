// Problem: Maximum Depth of Binary Tree
// LeetCode: https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Language: javascript
// Runtime: 1 ms
// Memory: 57.7 MB
// Submitted: 2025-07-21

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
 * @return {number}
 */
var maxDepth = function (root) {

    function dfs(node) {
        if (!node) return 0

        return 1 + Math.max(dfs(node.left), dfs(node.right))

    }

    return dfs(root)
};
