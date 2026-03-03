// Problem: Add One Row to Tree
// LeetCode: https://leetcode.com/problems/add-one-row-to-tree/
// Language: javascript
// Runtime: 0 ms
// Memory: 60.9 MB
// Submitted: 2025-11-11

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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
    if(depth === 1) {
        return new TreeNode(val, root, null)
    }

    function dfs(r, d) {
        if (!r) return;
        if (depth === d + 1) {
            r.left = new TreeNode(val, r.left, null)
            r.right = new TreeNode(val, null, r.right)

            return
        }
        dfs(r.left, d + 1);
        dfs(r.right, d + 1);
    }

    dfs(root, 1);

    return root
};
