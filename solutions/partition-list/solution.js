// Problem: Partition List
// LeetCode: https://leetcode.com/problems/partition-list/
// Language: javascript
// Runtime: 51 ms
// Memory: 43.9 MB
// Submitted: 2023-08-16

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {

    let less = new ListNode()
    let more = new ListNode()
    let lesstemp = less
    let moretemp = more
    while (head) {

        if (head.val < x) {
            lesstemp.next = new ListNode(head.val)
            lesstemp = lesstemp.next
        } else {
            moretemp.next = new ListNode(head.val)
            moretemp = moretemp.next
        }

        head = head.next
    }
    lesstemp.next = more.next

    return less.next
};
