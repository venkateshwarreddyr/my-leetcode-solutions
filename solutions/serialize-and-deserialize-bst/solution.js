// Problem: Serialize and Deserialize BST
// LeetCode: https://leetcode.com/problems/serialize-and-deserialize-bst/
// Language: javascript
// Runtime: 89 ms
// Memory: 48.7 MB
// Submitted: 2023-06-25

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
var serialize = function(root) {
    return JSON.stringify(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
     return JSON.parse(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
