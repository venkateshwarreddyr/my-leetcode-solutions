// Problem: Design Circular Deque
// LeetCode: https://leetcode.com/problems/design-circular-deque/
// Language: javascript
// Runtime: 9 ms
// Memory: 63.1 MB
// Submitted: 2025-11-01

/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    this.size = k
    this.a = []
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.a.length === this.size) return false
    this.a.unshift(value)
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.a.length === this.size) return false
    this.a.push(value)
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (this.a.length === 0) return false
    this.a.shift()

    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (this.a.length === 0) return false
    this.a.pop()
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    if (this.a.length === 0) return -1
    return this.a[0]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    if (this.a.length === 0) return -1
    return this.a[this.a.length - 1]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    return this.a.length === 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    return this.a.length === this.size
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
