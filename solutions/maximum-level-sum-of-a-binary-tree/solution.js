// Problem: Maximum Level Sum of a Binary Tree
// LeetCode: https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
// Language: javascript
// Runtime: 6 ms
// Memory: 74.2 MB
// Submitted: 2026-01-06

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
 * @return {number}
 */
var maxLevelSum = function (root) {
    let an = []
    function dfs(r, l) {
        if (!r) return;
        an[l] = an[l] || 0
        an[l] += r.val
        dfs(r.left, l + 1);
        dfs(r.right, l + 1);
    }

    dfs(root, 0);
    let max = Math.max(...an)

    return an.indexOf(max) + 1
};
