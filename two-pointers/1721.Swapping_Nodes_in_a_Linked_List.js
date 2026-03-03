// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/description/
// 1721. Swapping Nodes in a Linked List

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