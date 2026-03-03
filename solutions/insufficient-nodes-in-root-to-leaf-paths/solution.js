// Problem: Insufficient Nodes in Root to Leaf Paths
// LeetCode: https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/
// Language: javascript
// Runtime: 115 ms
// Memory: 49.2 MB
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
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function (root, limit) {
    cl = console.log
    function dfs(r, sum, p) {
        if (!r) return null;
        if (!r.left && !r.right) {
            return (sum + r.val) < limit ? null : r
        }
        r.left = dfs(r.left, sum + r.val, r)
        r.right = dfs(r.right, sum + r.val, r)
        if (!r.left && !r.right) return null
        return r;
    }
    return dfs(root, 0, null)
};

// var sufficientSubset = function (root, limit) {
//     cl = console.log
//     function dfs(r, limit) {
//         if (!r) return null;
//         if (!r.left && !r.right) {
//             return r.val < limit ? null : r
//         }
//         r.left = dfs(r.left, limit - r.val)
//         r.right = dfs(r.right, limit - r.val)

//         if (!r.left && !r.right) null
//         return r;
//     }
//     return dfs(root, limit)
// };
