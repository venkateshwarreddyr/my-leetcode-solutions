// Problem: Implement Queue using Stacks
// LeetCode: https://leetcode.com/problems/implement-queue-using-stacks/
// Language: javascript
// Runtime: 48 ms
// Memory: 42 MB
// Submitted: 2023-07-04

cl = console.log
var MyQueue = function () {
    let st1 = new Stack()
    let st2 = new Stack()

    MyQueue.prototype.push = function (x) {
        st1.push(x)
    };

    MyQueue.prototype.pop = function () {
        while (st1.size()) {
            st2.push(st1.pop())
        }
        let x = st2.pop();

        while (st2.size()) {
            st1.push(st2.pop())
        }

        return x;
    };

    MyQueue.prototype.peek = function () {
        while (st1.size()) {
            st2.push(st1.pop())
        }
        let x = st2.top();

        while (st2.size()) {
            st1.push(st2.pop())
        }
        return x
    };

    MyQueue.prototype.empty = function () {
        return st1.empty()
    };

};

/** 
 * @param {number} x
 * @return {void}
 */
function Stack() {
    this.a = [];
    this.top = () => this.a[this.a.length - 1];
    this.size = () => this.a.length;
    this.empty = () => !this.a.length;
    this.push = (e) => this.a.push(e);
    this.pop = () => this.a.pop();
    this.cl = () => console.log(this.a);
};

