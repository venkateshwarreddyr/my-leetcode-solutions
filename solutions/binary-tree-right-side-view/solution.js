// Problem: Binary Tree Right Side View
// LeetCode: https://leetcode.com/problems/binary-tree-right-side-view/
// Language: javascript
// Runtime: 0 ms
// Memory: 55.2 MB
// Submitted: 2025-07-03

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
 * @return {number[]}
 */
var rightSideView = function (root) {
    let an = []
    function dfs(r, l) {
        if (!r) return;
        dfs(r.left, l + 1);
        dfs(r.right, l + 1)
        an[l] = r.val
    }

    dfs(root, 0);
    return an
};
