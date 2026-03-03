// Problem: Swapping Nodes in a Linked List
// LeetCode: https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
// Language: javascript
// Runtime: 425 ms
// Memory: 101.3 MB
// Submitted: 2023-05-22

var swapNodes = function (head, k) {
    p1 = head;
    p2 = head;

    while (k != 1) {
        p1 = p1.next
        k--;
    }
    
    let temp = p1
    while (temp.next) {
        p2 = p2.next
        temp = temp.next;
    }

    let t = p1.val;
    p1.val = p2.val;
    p2.val = t;

    return head;
};
