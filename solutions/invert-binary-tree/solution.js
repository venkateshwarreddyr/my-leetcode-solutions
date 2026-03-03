// Problem: Invert Binary Tree
// LeetCode: https://leetcode.com/problems/invert-binary-tree/
// Language: javascript
// Runtime: 80 ms
// Memory: 40 MB
// Submitted: 2021-06-30

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
      if(!root) {return null}
    
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root; 
};
