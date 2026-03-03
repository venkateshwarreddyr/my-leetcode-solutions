// Problem: Winner of the Linked List Game
// LeetCode: https://leetcode.com/problems/winner-of-the-linked-list-game/
// Language: javascript
// Runtime: 67 ms
// Memory: 50.8 MB
// Submitted: 2024-05-11

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {string}
 */
var gameResult = function(head) {
    let evenWins = 0

    while(head) {
        if(head.val > head.next.val) {
            evenWins++
        } else if (head.val < head.next.val) {
            evenWins--
        }
        head = head.next.next
    }

    if(evenWins === 0) return "Tie"
    if(evenWins> 0) return "Even"
    return "Odd"
};
