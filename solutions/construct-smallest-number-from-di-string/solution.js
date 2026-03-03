// Problem: Construct Smallest Number From DI String
// LeetCode: https://leetcode.com/problems/construct-smallest-number-from-di-string/
// Language: javascript
// Runtime: 71 ms
// Memory: 42.5 MB
// Submitted: 2023-07-03

var Stack = function () {
    let a = [];
    Stack.prototype.top = () => a[a.length - 1];
    Stack.prototype.size = () => a.length;
    Stack.prototype.empty = () => !a.length;
    Stack.prototype.push = (e) => a.push(e);
    Stack.prototype.pop = () => a.pop();
};


var smallestNumber = function (pattern) {
    let stack = new Stack();
    let an = []
    let c = 1
    for (let e of pattern) {
        if (e === "I") {
            stack.push(c)
            while (!stack.empty())
                an.push(stack.pop())
        } else {
            stack.push(c)
        }
        c++
    }

    an.push(c) //             ==== 1
    while (!stack.empty()) // ==== 2
        an.push(stack.pop()) // ==== 3


    return an.join('');
};
