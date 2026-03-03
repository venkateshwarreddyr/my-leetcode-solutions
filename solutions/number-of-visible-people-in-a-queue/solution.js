// Problem: Number of Visible People in a Queue
// LeetCode: https://leetcode.com/problems/number-of-visible-people-in-a-queue/
// Language: javascript
// Runtime: 295 ms
// Memory: 74.7 MB
// Submitted: 2023-07-03

var Stack = function () {
    let a = [];
    let an = {};
    Stack.prototype.top = () => a[a.length - 1];
    Stack.prototype.size = () => a.length;
    Stack.prototype.empty = () => !a.length;
    Stack.prototype.push = (e) => a.push(e);
    Stack.prototype.pop = () => a.pop();
    Stack.prototype.cl = (...e) => console.log(a, ...e);

};



var canSeePersonsCount = function (a) {
    let n = a.length
    let an = []
    let stack = new Stack();
    for (let i = n - 1; i > -1; i--) {
        let cansee = 0
        while (!stack.empty() && a[i] > a[stack.top()]) {
            stack.pop()
            cansee++
        }
        if (stack.empty()) {
            an[i] = (cansee)
        } else {
            an[i] = (cansee + 1)
        }
        stack.push(i);
    }

    return an;
};
