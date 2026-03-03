// Problem: Merge Nodes in Between Zeros
// LeetCode: https://leetcode.com/problems/merge-nodes-in-between-zeros/
// Language: javascript
// Runtime: 420 ms
// Memory: 97 MB
// Submitted: 2024-07-04

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
var mergeNodes = function(head) {
    let node = head
    while(node != null){
        if(node.next.val!==0){
            node.val+=node.next.val
            node.next = node.next.next
        }else{
            node.next = node.next.next
            node = node.next
        }
    }
    return head;
};
