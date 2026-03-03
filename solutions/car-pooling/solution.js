// Problem: Car Pooling
// LeetCode: https://leetcode.com/problems/car-pooling/
// Language: javascript
// Runtime: 75 ms
// Memory: 44.2 MB
// Submitted: 2023-07-06

cl = console.log
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    let ps = new Array(1001).fill(0)
    for (let [np, from, to] of trips) {
        for (let i = from; i < to; i++) {
            ps[i] += np
            if (ps[i] > capacity) {

                return false;

            }
        }
    }

    return true
};
