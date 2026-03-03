// Problem: Allow One Function Call
// LeetCode: https://leetcode.com/problems/allow-one-function-call/
// Language: javascript
// Runtime: 58 ms
// Memory: 41.7 MB
// Submitted: 2023-12-13

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    this.fn = fn
	return function(...args){
        let an = this.fn(...args)
        this.fn = () =>{}
        return an
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

