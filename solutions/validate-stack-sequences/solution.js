// Problem: Validate Stack Sequences
// LeetCode: https://leetcode.com/problems/validate-stack-sequences/
// Language: javascript
// Runtime: 54 ms
// Memory: 44.7 MB
// Submitted: 2023-07-03

cl = console.log

var Stack = function () {
    let a = [];
    Stack.prototype.top = () => a[a.length - 1];
    Stack.prototype.size = () => a.length;
    Stack.prototype.empty = () => !a.length;
    Stack.prototype.push = (e) => a.push(e);
    Stack.prototype.pop = () => a.pop();
    Stack.prototype.cl = () => console.log(a);

};

var validateStackSequences = function (pushed, popped) {


    let stack = new Stack();
    let i = 0
    for (let num of pushed) {
        stack.push(num)
        while (stack.size() && stack.top() === popped[i]) {
            i++
            stack.pop()
        }
    }

    return stack.size() === 0
};
