// Problem: Create Hello World Function
// LeetCode: https://leetcode.com/problems/create-hello-world-function/
// Language: javascript
// Runtime: 55 ms
// Memory: 42.1 MB
// Submitted: 2023-12-13

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
