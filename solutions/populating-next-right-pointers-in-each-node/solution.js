// Problem: Populating Next Right Pointers in Each Node
// LeetCode: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
// Language: javascript
// Runtime: 68 ms
// Memory: 48.6 MB
// Submitted: 2023-06-26

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    let an = []
    function dfs(r, l) {
        if (!r) return;
        r.next = an[l] || null
        an[l] = r
        dfs(r.right, l + 1);
        dfs(r.left, l + 1);
    }

    dfs(root, 0);

    return root
};
