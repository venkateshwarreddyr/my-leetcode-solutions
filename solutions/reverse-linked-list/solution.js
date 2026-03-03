// Problem: Reverse Linked List
// LeetCode: https://leetcode.com/problems/reverse-linked-list/
// Language: javascript
// Runtime: 0 ms
// Memory: 58.4 MB
// Submitted: 2025-07-21


var reverseList = function (head) {
    let prev = null
    let curr = head
    while (curr) {
        let next = curr.next

        curr.next = prev

        prev = curr
        curr = next
    }

    head = prev

    return head
};
