// Problem: The Two Sneaky Numbers of Digitville
// LeetCode: https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/
// Language: javascript
// Runtime: 1 ms
// Memory: 56.5 MB
// Submitted: 2025-10-31

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(a) {
    let an = []
    let ob = {}

    for(let e of a) {
        if(ob[e]) {
            an.push(e)
        }

        ob[e] = 1
    }

    return an
};
