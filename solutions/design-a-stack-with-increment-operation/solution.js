// Problem: Design a Stack With Increment Operation
// LeetCode: https://leetcode.com/problems/design-a-stack-with-increment-operation/
// Language: javascript
// Runtime: 133 ms
// Memory: 49.8 MB
// Submitted: 2023-06-24

/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
    stack = new Array(maxSize)
    p = -1
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (p < stack.length - 1) {
        p++
        stack[p] = x
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    if (p > -1) {
        let x = stack[p]
        p--
        return x
    }
    return -1
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    for (let i = 0; i < k && i <= p; i++) {
        stack[i] += val
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
