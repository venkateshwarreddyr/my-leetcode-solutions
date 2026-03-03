// Problem: Reverse Linked List II
// LeetCode: https://leetcode.com/problems/reverse-linked-list-ii/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.2 MB
// Submitted: 2025-10-30

var reverseBetween = function (head, left, right) {
    let stack = []

    for (let t = head, pos = 1; t; t = t.next, pos++) {
        if (pos >= left && pos <= right) {
            stack.push(t.val)
        }
    }

    for (let t = head, pos = 1; t; t = t.next, pos++) {
        if (pos >= left && pos <= right) {
            t.val = stack.pop()
        }
    }

    return head
};

