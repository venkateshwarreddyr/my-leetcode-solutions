// Problem: Next Greater Node In Linked List
// LeetCode: https://leetcode.com/problems/next-greater-node-in-linked-list/
// Language: javascript
// Runtime: 114 ms
// Memory: 57.8 MB
// Submitted: 2023-10-16

var Stack = function () {
    let a = [];
    this.top = () => a[a.length - 1];
    this.size = () => a.length;
    this.empty = () => !a.length;
    this.push = (e) => a.push(e);
    this.pop = () => a.pop();
    this.cl = () => console.log(a);
};


var nextLargerNodes = function (head) {
    let an = new Array()

    let stack = new Stack();

    let i = 0
    while (head) {
        an.push(0)
        while (stack.top() && head.val > stack.top()[1]) {
            let [vi] = stack.pop()
            an[vi] = head.val
        }
        stack.push([i, head.val])
        head = head.next
        i++
    }

    return an
};
