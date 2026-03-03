// Problem: Sum Root to Leaf Numbers
// LeetCode: https://leetcode.com/problems/sum-root-to-leaf-numbers/
// Language: javascript
// Runtime: 42 ms
// Memory: 42 MB
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
 * @return {number}
 */
var sumNumbers = function (root) {
    cl = console.log
    let sum = 0
    function dfs(r, s) {
        if (!r) return;
        if (!r.left && !r.right) {
            sum += +(s + r.val)
            return;
        }

        dfs(r.left, s + r.val);
        dfs(r.right, s + r.val);
    }

    dfs(root, "");

    return sum
};
