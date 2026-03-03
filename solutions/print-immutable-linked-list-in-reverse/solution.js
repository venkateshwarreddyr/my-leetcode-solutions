// Problem: Print Immutable Linked List in Reverse
// LeetCode: https://leetcode.com/problems/print-immutable-linked-list-in-reverse/
// Language: javascript
// Runtime: 61 ms
// Memory: 52.6 MB
// Submitted: 2024-04-27

/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    }; 
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
var printLinkedListInReverse = function(head) {
    if(head === null) return
    printLinkedListInReverse(head.getNext())
    head.printValue()
};
