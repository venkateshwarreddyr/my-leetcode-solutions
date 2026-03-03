// Problem: Longest ZigZag Path in a Binary Tree
// LeetCode: https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/
// Language: javascript
// Runtime: 178 ms
// Memory: 91.9 MB
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
 * @return {number}
 */
var longestZigZag = function (root) {
    function dfs(r, isLeft, c) {
        if (!r) return c;

        return Math.max(
            dfs(r.left, 1, isLeft ? 0 : c + 1),
            dfs(r.right, 0, isLeft ? c + 1 : 0)
        );
    }


    return Math.max(dfs(root, 1, -1), dfs(root, 0, -1));
};
