// Problem: Find Positive Integer Solution for a Given Equation
// LeetCode: https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/
// Language: javascript
// Runtime: 128 ms
// Memory: 45.3 MB
// Submitted: 2023-07-01

cl = console.log
/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function (customfunction, z) {
    let an = []

    for (let i = 1; i <= 1000; i++) {
        let lo = 1, hi = 1000
        while (lo <= hi) {
            mid = Math.trunc(lo / 2 + hi / 2)
            let a = customfunction.f(i, mid)
            if (a === z) {
                an.push([i, mid]);
                break;
            }
            else if (a > z) {
                hi = mid - 1
            } else {
                lo = mid + 1
            }
        }
    }

    return an;
};
