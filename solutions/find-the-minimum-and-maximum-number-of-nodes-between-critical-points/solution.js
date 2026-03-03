// Problem: Find the Minimum and Maximum Number of Nodes Between Critical Points
// LeetCode: https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/
// Language: javascript
// Runtime: 145 ms
// Memory: 78.9 MB
// Submitted: 2024-07-05

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let minDist = Infinity
    let maxDist = -Infinity
    let first = -1
    let last = -1
    let i = 1
    let curr = head.next
    let prev = head
    while(curr.next) {
        next = curr.next

        if((curr.val>next.val && curr.val>prev.val) || (curr.val<next.val && curr.val<prev.val)) {
            if(first === -1) {
                first = i
                last = i
            } else {
                minDist = Math.min(minDist, i - last)
                maxDist = Math.max(maxDist, i - first)
                last = i
            }
        }


        prev = curr
        curr = curr.next
        i++
    }

    return [minDist === Infinity ? -1 : minDist, maxDist === -Infinity ? -1 : maxDist]
};
