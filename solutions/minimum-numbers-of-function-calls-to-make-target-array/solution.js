// Problem: Minimum Numbers of Function Calls to Make Target Array
// LeetCode: https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/
// Language: javascript
// Runtime: 107 ms
// Memory: 46.2 MB
// Submitted: 2023-07-19

cl = console.log
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (a) {
    let n = a.length
    let cc = 0
    while (true) {
        for (let j = 0; j < n; j++) {
            if (a[j] & (1)) {
                a[j]--
                cc++
            }
        }

        let max = Math.max(...a)
        if (max) {
            for (let j = 0; j < n; j++) {
                a[j] /= 2
            }
            cc++
        } else {
            return cc
        }
    }

};
