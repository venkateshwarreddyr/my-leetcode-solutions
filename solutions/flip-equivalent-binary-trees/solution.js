// Problem: Flip Equivalent Binary Trees
// LeetCode: https://leetcode.com/problems/flip-equivalent-binary-trees/
// Language: javascript
// Runtime: 72 ms
// Memory: 44.9 MB
// Submitted: 2023-06-27

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
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
    cl = console.log

    function dfs(r1, r2,) {
        if (!r1 && !r2) return true
        if (!r1 || !r2) return false
        if (r1.val !== r2.val) return false
        return dfs(r1.left, r2.left) && dfs(r1.right, r2.right) || dfs(r1.left, r2.right) && dfs(r1.right, r2.left)
    }
    return dfs(root1, root2)
};
