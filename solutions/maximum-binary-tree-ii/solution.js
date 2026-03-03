// Problem: Maximum Binary Tree II
// LeetCode: https://leetcode.com/problems/maximum-binary-tree-ii/
// Language: javascript
// Runtime: 0 ms
// Memory: 55.9 MB
// Submitted: 2025-10-27

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var insertIntoMaxTree = function (root, val) {
    function dfs(n, val) {
        if (!n || (n.val < val)) {
            return new TreeNode(val, n, null)
        }

        n.right = dfs(n.right, val)
        return n
    }
    return dfs(root, val)
};

