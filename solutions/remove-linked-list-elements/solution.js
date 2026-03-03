// Problem: Remove Linked List Elements
// LeetCode: https://leetcode.com/problems/remove-linked-list-elements/
// Language: javascript
// Runtime: 0 ms
// Memory: 59.6 MB
// Submitted: 2025-07-03

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
var removeElements = function(H, val) {
    let dummyHead  = new ListNode(-1, H)
    let head = dummyHead;
    while(head.next){
        if(head.next.val === val) head.next = head.next.next;
        else{
            head = head.next;
        }
    }
    return dummyHead.next;
};
