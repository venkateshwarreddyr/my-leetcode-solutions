// Problem: Counter
// LeetCode: https://leetcode.com/problems/counter/
// Language: javascript
// Runtime: 46 ms
// Memory: 41.2 MB
// Submitted: 2023-12-13

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    return function () {
        return n++
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
