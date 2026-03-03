// Problem: Lowest Common Ancestor of a Binary Tree
// LeetCode: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// Language: javascript
// Runtime: 72 ms
// Memory: 51.9 MB
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
    let set = new Set([p, q])
    function lca(r) {
        if (!r) return

        if (set.has(r)) return r

        let ll = lca(r.left)
        let rr = lca(r.right)
        return (ll && rr) ? r : (ll || rr)
    }
    return lca(root)
};
