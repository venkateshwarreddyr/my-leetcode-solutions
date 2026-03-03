// Problem: Build an Array With Stack Operations
// LeetCode: https://leetcode.com/problems/build-an-array-with-stack-operations/
// Language: javascript
// Runtime: 62 ms
// Memory: 41.9 MB
// Submitted: 2023-11-03

cl = console.log
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {

    let an = []
    let j = 0
    for (let i = 1; i <= n && j < target.length; i++) {
        if (i === target[j]) {
            an.push("Push")
            j++
        } else {
            an.push("Push")
            an.push("Pop")
        }
    }

    return an;
};
