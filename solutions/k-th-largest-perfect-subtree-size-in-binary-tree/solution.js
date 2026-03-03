// Problem: K-th Largest Perfect Subtree Size in Binary Tree
// LeetCode: https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/
// Language: javascript
// Runtime: 58 ms
// Memory: 79.5 MB
// Submitted: 2025-11-25

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
 * @param {number} k
 * @return {number}
 */
var kthLargestPerfectSubtree = function (root, k) {

    function dfs1(node) {
        if (!node) return 1

        let left = dfs1(node.left)
        let right = dfs1(node.right)
        node.leftSize = left
        node.rigthSize = right
        return 1 + left + right
    }

    function dfs3(node) {
        if (!node) return 0

        let left = dfs3(node.left)
        let right = dfs3(node.right)
        node.depth = 1 + Math.max(left, right)
        return node.depth
    }

    let ans = []
    function dfs2(node) {
        if (!node) return

        if (node.leftSize === node.rigthSize && node.leftSize === (2 ** node.depth - 1)) ans.push(node.leftSize)

        dfs2(node.left)
        dfs2(node.right)
    }

    dfs1(root)
    dfs3(root)

    dfs2(root)

    ans.sort((a, b) => b - a)

    return ans[k - 1] ?? -1
};
