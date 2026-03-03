// Problem: Array Prototype Last
// LeetCode: https://leetcode.com/problems/array-prototype-last/
// Language: javascript
// Runtime: 39 ms
// Memory: 41.4 MB
// Submitted: 2023-12-13

Array.prototype.last = function () {
    if (this.length)
        return this[this.length - 1]
    return -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
