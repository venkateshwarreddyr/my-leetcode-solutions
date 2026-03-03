// Problem: Maximum Difference Between Node and Ancestor
// LeetCode: https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
// Language: javascript
// Runtime: 64 ms
// Memory: 45.8 MB
// Submitted: 2024-01-11

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
 * @return {number}
 */
var maxAncestorDiff = function (root) {
  let an = -Infinity
  function dfs(r, a, b) {
    if (!r) return;
    if (a !== -Infinity) {
      let x = Math.abs(a - r.val)
      if (x > an) an = x
    }

    if (b !== Infinity) {
      let x = Math.abs(b - r.val)
      if (x > an) an = x
    }
    dfs(r.left, Math.max(a, r.val), Math.min(b, r.val));
    dfs(r.right, Math.max(a, r.val), Math.min(b, r.val));
  }

  dfs(root, -Infinity, Infinity);

  return an;

};
