// Problem: Construct Binary Search Tree from Preorder Traversal
// LeetCode: https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
// Language: javascript
// Runtime: 64 ms
// Memory: 43.1 MB
// Submitted: 2023-06-03

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (nums) {
    let root = new TreeNode()
    function dfs(r, v) {
        if (!r) return;
        if (r.val === 0) {
            r.val = v
        } else if (r.val > v) {
            if (!r.left)
                r.left = new TreeNode()
            dfs(r.left, v);
        } else {
            if (!r.right)
                r.right = new TreeNode()
            dfs(r.right, v);
        }
    }

    for (let e of nums) {
        dfs(root, e);
    }


    return root
};
