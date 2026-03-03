// Problem: Delete the Middle Node of a Linked List
// LeetCode: https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
// Language: javascript
// Runtime: 820 ms
// Memory: 85 MB
// Submitted: 2021-12-05

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(head.next === null) return null;
    let prev = null;
    let prev2 = null;
    let head1 = head;
    let head2 = head;
    while(head2.next !== null){
        prev = head1;
        head1 = head1.next;
        head2 = head2.next;
        if(head2.next === null){
            break
        }else{
        head2 = head2.next;
        }
    }
        prev.next = head1.next
    return head
};
