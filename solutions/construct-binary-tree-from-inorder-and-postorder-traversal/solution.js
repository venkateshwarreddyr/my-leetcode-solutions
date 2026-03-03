// Problem: Construct Binary Tree from Inorder and Postorder Traversal
// LeetCode: https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// Language: javascript
// Runtime: 27 ms
// Memory: 98.7 MB
// Submitted: 2025-08-23

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    let index = postorder.length - 1
    function helper(inorder) {
        if (inorder.length === 0) return null
        let root = postorder[index--]
        let indexOfRoot = inorder.indexOf(root)
        let leftInOrder = inorder.slice(0, indexOfRoot)
        let rightInOrder = inorder.slice(indexOfRoot + 1)
        let newNode = new TreeNode(root)
        newNode.right = helper(rightInOrder)
        newNode.left = helper(leftInOrder)
        return newNode
    }

    return helper(inorder)
};
