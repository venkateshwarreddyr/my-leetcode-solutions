// Problem: Delete Nodes And Return Forest
// LeetCode: https://leetcode.com/problems/delete-nodes-and-return-forest/
// Language: javascript
// Runtime: 83 ms
// Memory: 56.5 MB
// Submitted: 2024-05-11

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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {

    let an = []

    function dfs(node, parent, isLeft) {
        if (!node) return
        if (to_delete.includes(node.val)) {
            dfs(node.left, null, 1)
            dfs(node.right, null, 0)
            if (parent) {
                if (isLeft) {
                    parent.left = null
                } else {
                    parent.right = null
                }
            }
        } else {
            dfs(node.left, node, 1)
            dfs(node.right, node, 0)
            if (!parent) {
                an.push(node)
            }
        }
    }

    dfs(root)

    return an
};
