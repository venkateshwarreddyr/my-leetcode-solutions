// Problem: Remove Nth Node From End of List
// LeetCode: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.9 MB
// Submitted: 2025-10-30

var removeNthFromEnd = function (head, n) {
    let len = 0
    let t = head;
    while (t) {
        len++
        t = t.next;
    }

    let jumps = len - n - 1
    if (jumps === -1) {
        head = head.next
        return head
    }

    t = head
    while (jumps-- && t) {
        t = t.next;
    }
    t.next = t.next.next

    return head
};

