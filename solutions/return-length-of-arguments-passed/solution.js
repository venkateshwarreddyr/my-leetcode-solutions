// Problem: Return Length of Arguments Passed
// LeetCode: https://leetcode.com/problems/return-length-of-arguments-passed/
// Language: javascript
// Runtime: 57 ms
// Memory: 41.9 MB
// Submitted: 2023-12-13

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
	return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
