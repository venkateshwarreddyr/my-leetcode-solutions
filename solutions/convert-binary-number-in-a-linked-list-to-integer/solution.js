// Problem: Convert Binary Number in a Linked List to Integer
// LeetCode: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
// Language: javascript
// Runtime: 76 ms
// Memory: 37.9 MB
// Submitted: 2021-05-30

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
var getDecimalValue = function(head) {
    let val = 0;
    while(head!=null){
        val = (val<<1) | head.val;
        head = head.next
    }
    return val;
};

