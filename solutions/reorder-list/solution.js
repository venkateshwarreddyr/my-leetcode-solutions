// Problem: Reorder List
// LeetCode: https://leetcode.com/problems/reorder-list/
// Language: javascript
// Runtime: 97 ms
// Memory: 52.5 MB
// Submitted: 2023-07-10

cl = console.log
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {

    function fn(slow, fast) {
        if (fast === null || fast.next === null) {
            if (fast) {
                let temp = slow.next
                slow.next = null
                return temp;
            } else {
                return slow
            }
        }
        let x = fn(slow.next, fast.next.next, slow)
        let temp = x.next
        if (slow.next === x) {
            x.next = null
        } else {
            let t1 = slow.next
            slow.next = x

            x.next = t1
        }
        return temp
    }

    fn(head, head)

    return head
};
