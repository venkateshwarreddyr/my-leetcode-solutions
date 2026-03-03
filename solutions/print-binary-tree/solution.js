// Problem: Print Binary Tree
// LeetCode: https://leetcode.com/problems/print-binary-tree/
// Language: javascript
// Runtime: 0 ms
// Memory: 57.7 MB
// Submitted: 2025-11-08

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
 * @return {string[][]}
 */
var printTree = function (root) {
    function getHeight(node) {
        if (!node) return 0
        return 1 + Math.max(getHeight(node.left), getHeight(node.right))
    }
    const height = getHeight(root)

    let an = Array.from({ length: height }, () => new Array(2 ** height - 1).fill(""))

    function dfs(node, level, low, high) {
        if (!node) return
        let mid = Math.floor(low / 2 + high / 2)
        an[level][mid] += node.val
        dfs(node.left, level + 1, low, mid)
        dfs(node.right, level + 1, mid, high)

    }
    dfs(root, 0, 0, 2 ** height - 1)
    return an
};
