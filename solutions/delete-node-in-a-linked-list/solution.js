// Problem: Delete Node in a Linked List
// LeetCode: https://leetcode.com/problems/delete-node-in-a-linked-list/
// Language: javascript
// Runtime: 80 ms
// Memory: 40.8 MB
// Submitted: 2021-07-10

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
   node.val  = node.next.val;
node.next = node.next.next;
};
