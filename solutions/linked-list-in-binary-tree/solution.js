// Problem: Linked List in Binary Tree
// LeetCode: https://leetcode.com/problems/linked-list-in-binary-tree/
// Language: javascript
// Runtime: 83 ms
// Memory: 48.6 MB
// Submitted: 2023-06-26

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
    if (!root) return false;
    if (!head) return true;
    function dfs(r, h = head) {
        if (!h) return true
        if (!r) return false;
        if (r.val !== h.val) return false;
        return dfs(r.left, h.next) || dfs(r.right, h.next);
    }
    if (dfs(root, head)) return true

    return isSubPath(head, root.left) || isSubPath(head, root.right);
};
