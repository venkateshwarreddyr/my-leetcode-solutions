// Problem: Design Circular Queue
// LeetCode: https://leetcode.com/problems/design-circular-queue/
// Language: javascript
// Runtime: 134 ms
// Memory: 50.3 MB
// Submitted: 2023-06-15

var MyCircularQueue = function (k) {
    queue = new Array(k);
    tail = -1
    head = -1
    size = k
};
MyCircularQueue.prototype.isEmpty = function () {
    return tail === -1 && head === -1
};
MyCircularQueue.prototype.isFull = function () {
    return (head === (tail + 1) % size)
};
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty())
        return -1
    return queue[head]
};
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty())
        return -1
    return queue[tail]
};
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) return false
    if (this.isEmpty()) {
        head++
        tail++
    } else {
        tail++
        tail = tail % size
    }
    queue[tail] = value
    return true
};
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) {
        return false
    }
    if (head === tail) {
        head = -1
        tail = -1
    } else {
        head++
        head = head % size
    }
    return true
};
