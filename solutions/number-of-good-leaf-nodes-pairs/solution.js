// Problem: Number of Good Leaf Nodes Pairs
// LeetCode: https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/
// Language: javascript
// Runtime: 142 ms
// Memory: 62.2 MB
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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
    cl = console.log
    let c = 0
    function dfs(r) {
        if (!r) return [];
        if (!r.left && !r.right) return [1]
        let left = dfs(r.left);
        let right = dfs(r.right);

        for (let a of left) {
            for (let b of right) {
                if (a + b <= distance) c++
            }
        }
        return [...left, ...right].map(e => e + 1)
    }
    (dfs(root))

    return c
};
