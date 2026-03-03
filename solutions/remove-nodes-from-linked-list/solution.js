// Problem: Remove Nodes From Linked List
// LeetCode: https://leetcode.com/problems/remove-nodes-from-linked-list/
// Language: javascript
// Runtime: 357 ms
// Memory: 113.9 MB
// Submitted: 2023-07-03

cl = console.log
let stack = [];
stack.top = () => stack[stack.length - 1];
stack.size = () => stack.length;
stack.empty = () => !stack.length;

var Stack = function () {
    let a = [];
    Stack.prototype.top = () => a[a.length - 1];
    Stack.prototype.size = () => a.length;
    Stack.prototype.empty = () => !a.length;
    Stack.prototype.push = (e) => a.push(e);
    Stack.prototype.pop = () => a.pop();
    Stack.prototype.cl = () => console.log(a);
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
    let stack = new Stack();

    for (let temp = head; temp != null; temp = temp.next) {
        while (stack.top() < temp.val) {
            stack.pop()
        }
        stack.push(temp.val)
    }

    let h = null
    while (stack.size()) {
        if (h) {
            h = new ListNode(stack.pop(), h)
        } else {
            h = new ListNode(stack.pop(), null)
        }
    }

    return h;
};





