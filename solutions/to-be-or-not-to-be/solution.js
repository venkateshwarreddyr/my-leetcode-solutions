// Problem: To Be Or Not To Be
// LeetCode: https://leetcode.com/problems/to-be-or-not-to-be/
// Language: javascript
// Runtime: 45 ms
// Memory: 42 MB
// Submitted: 2023-12-13

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {

    return {
        toBe: (x) => {
            if (val === x) {
                return true
            }
            throw new Error("Not Equal")
        },
        notToBe: (x) => {

            if (val !== x) {
                return true
            }
            throw new Error("Equal")
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
