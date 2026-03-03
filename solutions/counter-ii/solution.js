// Problem: Counter II
// LeetCode: https://leetcode.com/problems/counter-ii/
// Language: javascript
// Runtime: 65 ms
// Memory: 44.3 MB
// Submitted: 2023-12-13

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    x = init

    return {
        increment: function() {
            return ++x
        },
        reset: function() {
            return x = init
        },
        decrement: function() {
            return --x
        }
    };
};


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
