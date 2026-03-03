// Problem: Middle of the Linked List
// LeetCode: https://leetcode.com/problems/middle-of-the-linked-list/
// Language: javascript
// Runtime: 49 ms
// Memory: 41.6 MB
// Submitted: 2023-05-10

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
var middleNode = function(head) {
    let one = head;
    let two = head;
    while(two && two.next){
        one = one.next;
        two = two.next.next;
    }
    
    return one
};
