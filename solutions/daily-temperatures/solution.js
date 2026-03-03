// Problem: Daily Temperatures
// LeetCode: https://leetcode.com/problems/daily-temperatures/
// Language: javascript
// Runtime: 373 ms
// Memory: 70 MB
// Submitted: 2023-07-03

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

cl = console.log

var dailyTemperatures = function (a) {
    let an = []
    let stack = new Stack();
    let n = a.length;

    for (let i = n - 1; i > -1; i--) {
        while (stack.size()) {
            if (a[i] < a[stack.top()]) {
                break
            } else {
                stack.pop()
            }
        }
        if (stack.size()) {
            an[i] = stack.top() - i
        } else {
            an[i] = 0
        }
        stack.push(i)
    }

    return an;
};
