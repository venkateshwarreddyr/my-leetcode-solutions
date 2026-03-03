// Problem: Sum of Nodes with Even-Valued Grandparent
// LeetCode: https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
// Language: javascript
// Runtime: 116 ms
// Memory: 51.3 MB
// Submitted: 2021-07-22

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
var sumEvenGrandparent = function(root) {
    let sum =0;
    var parseTreeDFS = function (node, parent) {
        if(parent && parent.evenParent){
            sum+=node.val;
        }
 if(node.left){ 
     node.left.evenParent = node.val%2 === 0 ? true : false;
     parseTreeDFS(node.left, node);
              }
  if(node.right){
     node.right.evenParent = node.val%2 === 0 ? true : false;
      parseTreeDFS(node.right, node);
  }
};

    parseTreeDFS(root, null)
    return sum
};
