// Problem: Online Stock Span
// LeetCode: https://leetcode.com/problems/online-stock-span/
// Language: javascript
// Runtime: 264 ms
// Memory: 60.5 MB
// Submitted: 2023-07-02

var StockSpanner = function () {

    let stack = [];
    stack.top = () => stack[stack.length - 1] || [];
    stack.size = () => stack.length;
    stack.empty = () => !stack.length;

    StockSpanner.prototype.next = function (price) {
        let c = 1;
        while (stack.top()[0] <= price) {
            c += stack.pop()[1]
        }

        stack.push([price, c])

        return c
    };

};

