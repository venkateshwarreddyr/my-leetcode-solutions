// Problem: Minimum Number of Operations to Move All Balls to Each Box
// LeetCode: https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
// Language: javascript
// Runtime: 166 ms
// Memory: 44.2 MB
// Submitted: 2023-06-16

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (s) {
    let arr = []
    let n = s.length
    let i = 0
    for (let e of s) {
        if (e === "1") {
            arr.push(i)
        }
        i++
    }

    let an = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        for (let e of arr) {
            an[i] += (Math.abs(e - i))
        }
    }

    return an;
};
