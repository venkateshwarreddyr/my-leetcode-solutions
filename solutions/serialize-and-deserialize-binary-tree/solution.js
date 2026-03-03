// Problem: Serialize and Deserialize Binary Tree
// LeetCode: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
// Language: javascript
// Runtime: 132 ms
// Memory: 67.3 MB
// Submitted: 2025-07-04

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    let a = []
    function dfs(r) {
        if (!r) {
            a.push(null);
            return;
        }
        a.push(r.val)
        dfs(r.left);
        dfs(r.right);
    }

    dfs(root);

    return a
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {

    function construct() {
        if (data.length === 0) return;
        let val = data.shift()
        if (val === null) return null
        const node = new TreeNode(val)
        node.left = construct()
        node.right = construct()

        return node
    }
    return construct()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
