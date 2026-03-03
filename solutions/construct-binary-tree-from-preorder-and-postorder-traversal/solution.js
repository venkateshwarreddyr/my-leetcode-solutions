// Problem: Construct Binary Tree from Preorder and Postorder Traversal
// LeetCode: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
// Language: javascript
// Runtime: 57 ms
// Memory: 53.1 MB
// Submitted: 2024-05-31

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    if (!preorder.length) return null;
    
    let root = new TreeNode(preorder[0]);
    if (preorder.length === 1) return root;
    
    let L = preorder[1];
    let L_idx_post = postorder.indexOf(L);
    let leftSize = L_idx_post + 1;
    
    root.left = constructFromPrePost(preorder.slice(1, 1 + leftSize), postorder.slice(0, leftSize));
    root.right = constructFromPrePost(preorder.slice(1 + leftSize), postorder.slice(leftSize, postorder.length - 1));
    
    return root;
};

