// Problem: Balanced Binary Tree
// LeetCode: https://leetcode.com/problems/balanced-binary-tree/
// Language: javascript
// Runtime: 5 ms
// Memory: 59.9 MB
// Submitted: 2026-02-08

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
 * @return {boolean}
 */
// tree Height
var height = function(root) {
  if(root === null) return 0
  else return Math.max(height(root.left), height(root.right))+1;
};
var isBalanced = function(root) {
    if(root===null) return true;
    return Math.abs(height(root.left)-height(root.right))<=1 && isBalanced(root.left) && isBalanced(root.right)
    // return Math.max(...arr) - Math.min(...arr)<=1;
};
