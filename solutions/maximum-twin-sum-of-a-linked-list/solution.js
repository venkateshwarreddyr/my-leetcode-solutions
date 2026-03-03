// Problem: Maximum Twin Sum of a Linked List
// LeetCode: https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
// Language: javascript
// Runtime: 9 ms
// Memory: 90 MB
// Submitted: 2026-02-20

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let p = null;
    let temp = head;
    while(temp.next!=null){
        p = temp
        temp = temp.next
        temp.prev = p
    }
    p = temp
    temp = head;
    let sum = -1;
    while(temp!=null){
        if((temp.val + p.val) > sum){
            sum = temp.val + p.val
        }
        temp = temp.next;
        p = p.prev
    }
    return sum;
};
