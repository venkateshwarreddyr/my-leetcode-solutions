// Problem: Find Leaves of Binary Tree
// LeetCode: https://leetcode.com/problems/find-leaves-of-binary-tree/
// Language: javascript
// Runtime: 63 ms
// Memory: 49.1 MB
// Submitted: 2024-05-10

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
 * @return {number[][]}
 */
var findLeaves = function (root) {
    let an = []
    let temp = []
    function dfs(node, parent, isLeft) {
        if (!node) return
        if (!node.left && !node.right) {
            temp.push(node.val)
            if (parent) {
                if (isLeft)
                    parent.left = null
                if (!isLeft)
                    parent.right = null
            } else {
                root = null
            }
        }

        dfs(node.left, node, 1)
        dfs(node.right, node, 0)

    }

    dfs(root, null)
    while (temp.length) {
        an.push(temp)
        temp = []
        dfs(root, null)
    }

    return an

};
