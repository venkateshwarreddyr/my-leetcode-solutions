// Problem: Binary Tree Zigzag Level Order Traversal
// LeetCode: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
// Language: javascript
// Runtime: 51 ms
// Memory: 44.1 MB
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
var zigzagLevelOrder = function (root) {
    let arr = []
    function dfs(r, l) {
        if (!r) return;
        arr[l] = arr[l] || []
        if (l % 2 === 0)
            arr[l].push(r.val)
        else
            arr[l].unshift(r.val)
        dfs(r.left, l + 1);
        dfs(r.right, l + 1);
    }

    dfs(root, 0);


    return arr;
};
