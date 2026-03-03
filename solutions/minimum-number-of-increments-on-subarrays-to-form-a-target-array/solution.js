// Problem: Minimum Number of Increments on Subarrays to Form a Target Array
// LeetCode: https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/
// Language: javascript
// Runtime: 16 ms
// Memory: 66.7 MB
// Submitted: 2025-10-30

cl = console.log
var Stack = function () {
    let a = [];
    Stack.prototype.top = () => a[a.length - 1];
    Stack.prototype.size = () => a.length;
    Stack.prototype.empty = () => !a.length;
    Stack.prototype.push = (e) => a.push(e);
    Stack.prototype.pop = () => a.pop();
};

let stack = new Stack();

var minNumberOperations = function (a) {

    let cc = a[0]
    let stack = new Stack();
    stack.push(Infinity)
    for (let e of a) {
        if (stack.top() >= e) {

        } else {
            cc += (e - stack.top())
        }
        stack.pop()
        stack.push(e)
    }

    return cc;
};
