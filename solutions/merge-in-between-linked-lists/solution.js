// Problem: Merge In Between Linked Lists
// LeetCode: https://leetcode.com/problems/merge-in-between-linked-lists/
// Language: javascript
// Runtime: 218 ms
// Memory: 62.9 MB
// Submitted: 2023-07-09

cl = console.log
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let head = list1
    let found = null
    let ct = 0
    while (list1.next) {
        if (ct === a - 1) {
            found = list1.next
            list1.next = list2
            ct++
        }
        if (!found)
            ct++
        list1 = list1.next
    }
    while (found.next) {
        if (ct === b) {
            list1.next = found.next
            break;
        }
        ct++
        found = found.next
    }

    return head
};
