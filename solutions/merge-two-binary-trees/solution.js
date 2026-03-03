// Problem: Merge Two Binary Trees
// LeetCode: https://leetcode.com/problems/merge-two-binary-trees/
// Language: javascript
// Runtime: 112 ms
// Memory: 46.9 MB
// Submitted: 2021-06-26

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// var mergeTrees = function(root1, root2) {
    
//     function dfsBinaryTree(node1, node2){
//         node2.val+=node1.val;
//         node1.left&&node2.left&&dfsBinaryTree(node1.left, node2.left);
//         node1.right&&node2.right&&dfsBinaryTree(node1.right, node2.right);
//         if(node1.left && node2.left === null) node2.left= node1.left;
//         if(node1.right && node2.right === null) node2.right= node1.right;     
//     }
//     if(root1 && root2) dfsBinaryTree(root1, root2)
//     else if(root1) return root1
//     return root2
// };
var mergeTrees = function(root1, root2) {
    
    if(root1===null) return root2;
    if(root2===null) return root1;
    root1.val+=root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1;
};
