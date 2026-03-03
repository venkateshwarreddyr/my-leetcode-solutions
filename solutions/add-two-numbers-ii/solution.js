// Problem: Add Two Numbers II
// LeetCode: https://leetcode.com/problems/add-two-numbers-ii/
// Language: javascript
// Runtime: 103 ms
// Memory: 47.5 MB
// Submitted: 2023-10-13

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let st1 = []
    let st2 = []

    while (l1) {
        st1.push(l1.val)
        l1 = l1.next
    }

    while (l2) {
        st2.push(l2.val)
        l2 = l2.next
    }

    let carry = 0
    let start = null
    while (st1.length || st2.length || carry) {
        let x = st1.pop() ?? 0
        let y = st2.pop() ?? 0
        let sum = x + y + carry
        let v = (sum) % 10
        carry = Math.floor((sum) / 10)
        start = new ListNode(v, start)
    }

    return start
};
