// Problem: Kth Smallest Element in a BST
// LeetCode: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// Language: javascript
// Runtime: 81 ms
// Memory: 47 MB
// Submitted: 2023-06-26

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
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let c = 0
    let an = null
    function dfs(r) {
        if (!r || an) return;
        dfs(r.left);
        c++
        if(c===k){
            an = r.val
        }
        dfs(r.right);
    }

    dfs(root);

    return an;
};
