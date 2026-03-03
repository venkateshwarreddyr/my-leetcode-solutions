// Problem: Debounce
// LeetCode: https://leetcode.com/problems/debounce/
// Language: javascript
// Runtime: 57 ms
// Memory: 41.6 MB
// Submitted: 2023-12-13

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer = null
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args)
        }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
