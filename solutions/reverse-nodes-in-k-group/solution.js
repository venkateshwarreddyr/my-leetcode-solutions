// Problem: Reverse Nodes in k-Group
// LeetCode: https://leetcode.com/problems/reverse-nodes-in-k-group/
// Language: javascript
// Runtime: 0 ms
// Memory: 59.5 MB
// Submitted: 2025-06-30

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let a = new Array(k)

    let curr = head
    for (let i = 0; i < k; i++) {
        if(curr === null) return head
        a[i] = curr
        curr = curr.next
    }

    for (let i = 1; i < k; i++) {
        a[i].next = a[i-1]
    }

    a[0].next = reverseKGroup(curr, k)

    return a[k-1]
};
