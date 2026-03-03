// Problem: Implement Stack using Queues
// LeetCode: https://leetcode.com/problems/implement-stack-using-queues/
// Language: javascript
// Runtime: 56 ms
// Memory: 41.7 MB
// Submitted: 2023-05-27

var MyStack = function () {
    st = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    st.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return st.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return st[st.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return !st.length
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
