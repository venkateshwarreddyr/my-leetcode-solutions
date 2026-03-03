// Problem: Binary Tree Postorder Traversal
// LeetCode: https://leetcode.com/problems/binary-tree-postorder-traversal/
// Language: javascript
// Runtime: 72 ms
// Memory: 39.1 MB
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(!root) return []
    var parseTreeDFS = function (node) {
        if(node){
            
 parseTreeDFS(node.left);
 parseTreeDFS(node.right);
    arr.push(node.val)
        }
};
    let arr = []
    parseTreeDFS(root);
    return arr
};
