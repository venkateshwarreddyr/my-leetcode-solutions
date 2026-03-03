// Problem: Binary Tree Preorder Traversal
// LeetCode: https://leetcode.com/problems/binary-tree-preorder-traversal/
// Language: javascript
// Runtime: 76 ms
// Memory: 38.7 MB
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
var preorderTraversal = function(root) {
    if(!root) return []
    var parseTreeDFS = function (node) {
        if(node){
            
    arr.push(node.val)
 parseTreeDFS(node.left);
 parseTreeDFS(node.right);
        }
};
    let arr = []
    parseTreeDFS(root);
    return arr
};
