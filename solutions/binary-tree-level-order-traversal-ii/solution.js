// Problem: Binary Tree Level Order Traversal II
// LeetCode: https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
// Language: javascript
// Runtime: 62 ms
// Memory: 44.8 MB
// Submitted: 2023-06-27

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
var levelOrderBottom = function (root) {
    let arr = []
    function dfs(r, l) {
        if (!r) return;
        arr[l] = arr[l] || []
        arr[l].push(r.val)
        dfs(r.left, l + 1);
        dfs(r.right, l + 1);
    }

    dfs(root, 0);


    return arr.reverse();
};
