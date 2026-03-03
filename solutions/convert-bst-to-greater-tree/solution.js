// Problem: Convert BST to Greater Tree
// LeetCode: https://leetcode.com/problems/convert-bst-to-greater-tree/
// Language: javascript
// Runtime: 92 ms
// Memory: 51.8 MB
// Submitted: 2023-06-26

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
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let sum = 0
    function dfs(r) {
        if (!r) return;

        dfs(r.right);
        sum+=r.val
        r.val = sum
        dfs(r.left);
    }

    dfs(root);
    return root
};
