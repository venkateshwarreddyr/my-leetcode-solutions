// Problem: Flatten a Multilevel Doubly Linked List
// LeetCode: https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
// Language: javascript
// Runtime: 33 ms
// Memory: 58.3 MB
// Submitted: 2025-11-01


var flatten = function (head) {
    let curr = head
    while (curr) {
        if (curr.child) {
            const next = curr.next
            let child = flatten(curr.child)
            curr.child = null

            child.prev = curr
            curr.next = child

            let tail = child
            while (tail.next) tail = tail.next

            if (next) {
                next.prev = tail
                tail.next = next
            }
            curr = child
        }

        curr = curr.next
    }

    return head
};
