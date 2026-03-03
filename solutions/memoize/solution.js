// Problem: Memoize
// LeetCode: https://leetcode.com/problems/memoize/
// Language: javascript
// Runtime: 310 ms
// Memory: 109.5 MB
// Submitted: 2023-12-13

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let ob = {};
    return function (...args) {
        let x = args.toString()
        if (ob[x] !== undefined) return ob[x]
        ob[x] = fn(...args)
        return ob[x]
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
