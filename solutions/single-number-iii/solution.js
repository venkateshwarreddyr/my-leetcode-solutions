// Problem: Single Number III
// LeetCode: https://leetcode.com/problems/single-number-iii/
// Language: javascript
// Runtime: 74 ms
// Memory: 53.5 MB
// Submitted: 2024-05-31

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (a) {
    let ob = {}

    for (let e of a) {
        if (ob[e]) {
            delete ob[e]
        } else {
            ob[e] = 1
        }
    }

    return Object.keys(ob).map(e => +e)
};
