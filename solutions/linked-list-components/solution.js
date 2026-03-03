// Problem: Linked List Components
// LeetCode: https://leetcode.com/problems/linked-list-components/
// Language: javascript
// Runtime: 2 ms
// Memory: 59 MB
// Submitted: 2025-10-30

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
    let set = new Set(nums)

    let an = 0
    let counter = 0
    for (let curr = head; curr; curr = curr.next) {
        if (set.has(curr.val)) {
            counter++
        } else {
            if (counter) {
                an++
            }
            counter = 0
        }
    }
    
    if (counter) {
        an++
    }

    return an
};
