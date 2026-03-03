// Problem: Two Sum IV - Input is a BST
// LeetCode: https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
// Language: javascript
// Runtime: 93 ms
// Memory: 52.3 MB
// Submitted: 2023-05-20

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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let set = new Set();
    let an = false;
    function dfs(node) {
        if (!node) return;

        if (set.has(node.val)) {
            an = true;
            return
        } else {
            set.add(k - node.val)
        }

        dfs(node.left)
        dfs(node.right)

    }
    dfs(root)
    return an;
};
