// Problem: Convert Sorted List to Binary Search Tree
// LeetCode: https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
// Language: javascript
// Runtime: 78 ms
// Memory: 47.2 MB
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
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    if (!head) return null
    let slow = head
    let fast = head
    let prev = null
    while (fast?.next) {
        prev = slow
        slow = slow.next
        fast = fast.next
        fast = fast.next
    }
    let root = new TreeNode(slow.val)
    if(slow === fast) return root
    prev.next = null
    root.left = sortedListToBST(head)
    root.right = sortedListToBST(slow.next)
    return root;
};
