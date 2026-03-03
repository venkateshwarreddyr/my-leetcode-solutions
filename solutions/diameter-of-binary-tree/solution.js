// Problem: Diameter of Binary Tree
// LeetCode: https://leetcode.com/problems/diameter-of-binary-tree/
// Language: javascript
// Runtime: 108 ms
// Memory: 43.4 MB
// Submitted: 2021-07-10

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

var diameterOfBinaryTree = function (root) {
  var height = function (root) {
    if (root === null) return 0;
    else return Math.max(height(root.left), height(root.right)) + 1;
  };
  let newArr = [];
    let obj = {}
  var parseTreeDFS = function (node) {
    if(!obj[node.val]){
    obj[node.val] = (height(node.left) + height(node.right));
    node.left && parseTreeDFS(node.left);
    node.right && parseTreeDFS(node.right);
    }
  };
  parseTreeDFS(root);
  console.log(obj);

  return Math.max(...Object.values(obj));
};

