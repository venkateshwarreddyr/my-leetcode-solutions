// Problem: Odd Even Linked List
// LeetCode: https://leetcode.com/problems/odd-even-linked-list/
// Language: javascript
// Runtime: 1 ms
// Memory: 59.2 MB
// Submitted: 2025-10-30

var oddEvenList = function (head) {
    if (!head) return head; // 0 elements
    if (!head.next) return head; // 1 elements

    let head_next_old = head.next;

    let odd = head;
    let even = head.next;
    for (; odd.next && even.next; odd = odd.next, even = even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
    }

    odd.next = head_next_old;
    return head;
};
