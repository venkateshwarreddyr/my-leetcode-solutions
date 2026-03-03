// Problem: Populating Next Right Pointers in Each Node II
// LeetCode: https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
// Language: javascript
// Runtime: 59 ms
// Memory: 60.9 MB
// Submitted: 2025-08-23

/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (root === null) return null
    let q = [root]



    while (q.length) {
        let len = q.length

        let prev = null
        let nq = []
        for (let i = 0; i < len; i++) {
            if (prev) {
                prev.next = q[i]
            }
            if (q[i].left) {
                nq.push(q[i].left)
            }
            if (q[i].right) {
                nq.push(q[i].right)
            }
            prev = q[i]
        }
        q = nq
    }

    return root
};
