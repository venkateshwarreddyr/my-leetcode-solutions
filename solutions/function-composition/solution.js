// Problem: Function Composition
// LeetCode: https://leetcode.com/problems/function-composition/
// Language: javascript
// Runtime: 56 ms
// Memory: 43.2 MB
// Submitted: 2023-12-13

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
	return function(x) {
        return functions.reverse().reduce((a, fn) => fn(a), x)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
