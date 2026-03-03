// Problem: Linked List Cycle II
// LeetCode: https://leetcode.com/problems/linked-list-cycle-ii/
// Language: javascript
// Runtime: 54 ms
// Memory: 58 MB
// Submitted: 2025-10-30

var detectCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // point Q found
            let p1 = head;
            let q1 = slow; // slow === fast at Q

            while (p1 !== q1) {
                p1 = p1.next;
                q1 = q1.next;
            }
            return p1; // point P
        }
    }

    return null; // no cycle
};
