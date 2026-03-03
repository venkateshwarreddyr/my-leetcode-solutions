// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/description/
// 1721. Swapping Nodes in a Linked List
cl = console.log
var swapNodes = function (head, k) {
    let stack = [];
    let temp = head;
    while (temp) {
        stack.push(temp)
        temp = temp.next;
    }
    temp = head;
    while (k !== 1) {
        temp = temp.next;
        stack.pop();
        k--
    }
    let node = stack.pop();

    let t = node.val;
    node.val = temp.val;
    temp.val = t;

    return head;
};