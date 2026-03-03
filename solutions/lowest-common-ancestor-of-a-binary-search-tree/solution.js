// Problem: Lowest Common Ancestor of a Binary Search Tree
// LeetCode: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// Language: javascript
// Runtime: 80 ms
// Memory: 52 MB
// Submitted: 2023-06-27

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    cl = console.log
    function dfs(r) {
        if (!r) return null;
        if (r.val > p.val && r.val > q.val) {
            return dfs(r.left);
        } else if (r.val < p.val && r.val < q.val) {
            return dfs(r.right);
        }
        return r
    }

    return dfs(root);
};
