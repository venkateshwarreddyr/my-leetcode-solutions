// Problem: Linked List Cycle
// LeetCode: https://leetcode.com/problems/linked-list-cycle/
// Language: javascript
// Runtime: 64 ms
// Memory: 44.8 MB
// Submitted: 2023-09-04

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle1 = function(head) {
    let current = head;
    while(current){
        if(current.passed) return true
        current.passed =  true
        current = current.next
    }
    
    return false
};
var hasCycle = function(head) {
    let slow = head, fast = head?.next
    while (slow && fast)
        if (slow === fast) return true
        else slow = slow.next, fast = fast.next?.next
    return false
};
var hasCycle2 = function(head) {
    let slow = head, fast = head?.next;
    while(slow && fast){
        if(slow === fast) return true
        slow = slow.next;
        fast = fast.next?.next
    }
        return false
};
