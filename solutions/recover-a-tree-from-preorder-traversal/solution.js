// Problem: Recover a Tree From Preorder Traversal
// LeetCode: https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/
// Language: javascript
// Runtime: 88 ms
// Memory: 49.6 MB
// Submitted: 2023-10-03

cl = console.log
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (str, lvl = 1) {
    const nodes = str.split(new RegExp(`(?<=[0-9])-{${lvl}}(?=[0-9])`, 'g'));
    const node = new TreeNode(Number(nodes.shift()));
    if (nodes[0]) node.left = recoverFromPreorder(nodes[0], lvl + 1);
    if (nodes[1]) node.right = recoverFromPreorder(nodes[1], lvl + 1);
    return node;
};
