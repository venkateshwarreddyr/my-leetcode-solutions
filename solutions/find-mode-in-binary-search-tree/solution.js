// Problem: Find Mode in Binary Search Tree
// LeetCode: https://leetcode.com/problems/find-mode-in-binary-search-tree/
// Language: javascript
// Runtime: 91 ms
// Memory: 50.3 MB
// Submitted: 2023-05-30

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
 * @return {number[]}
 */
var findMode = function (root) {
    let ob = {}

    function dfs(r) {
        if (!r) return;
        ob[r.val] = ob[r.val] || 0;
        ob[r.val]++;
        dfs(r.left)
        dfs(r.right)
    }
    dfs(root)

    let max = Math.max(...Object.values(ob))
    let an = []

    for (let k in ob) {
        if (ob[k] === max) {
            an.push(k)
        }
    }

    return an;
};
