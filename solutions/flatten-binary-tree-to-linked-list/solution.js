// Problem: Flatten Binary Tree to Linked List
// LeetCode: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
// Language: javascript
// Runtime: 0 ms
// Memory: 57.7 MB
// Submitted: 2025-07-02

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    let prev = null
    function dfs(r) {
        if (!r) return;

        dfs(r.right);
        dfs(r.left);
        r.right = prev;
        r.left = null;
        prev = r;
    }

    dfs(root);

    return root
};
