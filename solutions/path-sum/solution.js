// Problem: Path Sum
// LeetCode: https://leetcode.com/problems/path-sum/
// Language: javascript
// Runtime: 0 ms
// Memory: 58.7 MB
// Submitted: 2025-07-06

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let sum = 0;
  let flag = false;
  var parseTreeDFS = function (node) {
    if (node) {
        sum += node.val;
      if (node.left || node.right) {
        node.left && parseTreeDFS(node.left);
        node.right && parseTreeDFS(node.right);
      } else {
        if (sum === targetSum)
          flag = true;
      }
        
        sum -= node.val;
    }
  };
  parseTreeDFS(root);
  return flag;
};
