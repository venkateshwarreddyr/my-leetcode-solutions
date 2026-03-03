// Problem: Call Function with Custom Context
// LeetCode: https://leetcode.com/problems/call-function-with-custom-context/
// Language: javascript
// Runtime: 49 ms
// Memory: 42 MB
// Submitted: 2023-12-13

/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function(context, ...args) {
	return this.apply(context, args)
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
