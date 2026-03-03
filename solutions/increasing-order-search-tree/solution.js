// Problem: Increasing Order Search Tree
// LeetCode: https://leetcode.com/problems/increasing-order-search-tree/
// Language: javascript
// Runtime: 76 ms
// Memory: 40.4 MB
// Submitted: 2021-06-30


 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    x = null
    y = null
var parseTreeDFS = function (node) {

  node.left && parseTreeDFS(node.left);
    if(!x){
        x = y = node
    }else{
        x.right = node
        x = x.right;
        node.left = null;
    }
  node.right && parseTreeDFS(node.right);
};
parseTreeDFS(root)
return y
};
