// Problem: Validate Binary Search Tree
// LeetCode: https://leetcode.com/problems/validate-binary-search-tree/
// Language: javascript
// Runtime: 1 ms
// Memory: 59.4 MB
// Submitted: 2025-08-19

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
 * @return {boolean}
 */
var isValidBST = function (root, left = -Infinity, right = Infinity) {
    if (root === null) return true

    if (left >= root.val || right <= root.val) return false

    return isValidBST(root.left, left, root.val) && isValidBST(root.right, root.val, right)
};
