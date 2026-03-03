// Problem: Insert into a Binary Search Tree
// LeetCode: https://leetcode.com/problems/insert-into-a-binary-search-tree/
// Language: javascript
// Runtime: 123 ms
// Memory: 53.4 MB
// Submitted: 2023-06-24

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
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    function dfs(r) {
        if (!r) return new TreeNode(val)

        if (r.val > val) {
            r.left = dfs(r.left)
        }
        else {
            r.right = dfs(r.right)
        }

        return r
    }

    return dfs(root)
};
