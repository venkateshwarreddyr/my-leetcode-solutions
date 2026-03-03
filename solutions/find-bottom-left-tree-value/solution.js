// Problem: Find Bottom Left Tree Value
// LeetCode: https://leetcode.com/problems/find-bottom-left-tree-value/
// Language: javascript
// Runtime: 82 ms
// Memory: 46.5 MB
// Submitted: 2023-06-24

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
var findBottomLeftValue = function (root) {

    let q = [root]
    let val = 0
    while (q.length) {
        val = q[0].val
        let nq = []
        for (let e of q) {
            if (e.left) {
                nq.push(e.left)
            }
            if (e.right) {
                nq.push(e.right)
            }
        }
        q = nq
    }

    return val
};
