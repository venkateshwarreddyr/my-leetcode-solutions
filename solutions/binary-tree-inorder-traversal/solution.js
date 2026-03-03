// Problem: Binary Tree Inorder Traversal
// LeetCode: https://leetcode.com/problems/binary-tree-inorder-traversal/
// Language: javascript
// Runtime: 64 ms
// Memory: 38.7 MB
// Submitted: 2021-07-01

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let arr = [];
var parseTreeDFS = function (node) {
  node.left && parseTreeDFS(node.left);
    arr.push(node.val)
  node.right && parseTreeDFS(node.right);
};
    root&&parseTreeDFS(root)
    return arr
};
