// Problem: Minimum Depth of Binary Tree
// LeetCode: https://leetcode.com/problems/minimum-depth-of-binary-tree/
// Language: javascript
// Runtime: 9 ms
// Memory: 99.6 MB
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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0
         let arr = [];
    let height = 0
    var parseTreeDFS = function (node) {
        height++;
          if(!node.left && !node.right){
       arr.push(height)
    }
        else if(node.left || node.right){
  node.left && parseTreeDFS(node.left);
  node.right && parseTreeDFS(node.right);
        }else{
            arr.push(height)
        }
        height--
};

root && parseTreeDFS(root);
    // console.log({arr})
    
    return Math.min(...arr);
};
