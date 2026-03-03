// Problem: Construct Binary Tree from Preorder and Inorder Traversal
// LeetCode: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// Language: javascript
// Runtime: 43 ms
// Memory: 98.4 MB
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    let index = 0
    function helper(inorder) {
        if (inorder.length === 0) return null
        let root = preorder[index++]
        let indexOfRoot = inorder.indexOf(root)
        let leftInOrder = inorder.slice(0, indexOfRoot)
        let rightInOrder = inorder.slice(indexOfRoot + 1)
        let newNode = new TreeNode(root)
        newNode.left = helper(leftInOrder)
        newNode.right = helper(rightInOrder)
        return newNode
    }

    return helper(inorder)

};
