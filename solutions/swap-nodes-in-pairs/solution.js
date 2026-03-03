// Problem: Swap Nodes in Pairs
// LeetCode: https://leetcode.com/problems/swap-nodes-in-pairs/
// Language: javascript
// Runtime: 0 ms
// Memory: 54 MB
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head) return null
    let one = head, two = head.next
    if(two){
        one.next = swapPairs(two.next);
        two.next = one
    } else {
        two = one
    }

    return two
};
