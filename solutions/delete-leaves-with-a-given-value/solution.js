// Problem: Delete Leaves With a Given Value
// LeetCode: https://leetcode.com/problems/delete-leaves-with-a-given-value/
// Language: javascript
// Runtime: 61 ms
// Memory: 54 MB
// Submitted: 2024-05-17

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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
    function dfs(r) {
        if (!r) return null;


        let left = dfs(r.left);
        let right = dfs(r.right);

        if (r.val === target && !left && !right) {
            return null
        }
        r.left = left
        r.right = right

        return r
    }

    

    return dfs(root);
};
