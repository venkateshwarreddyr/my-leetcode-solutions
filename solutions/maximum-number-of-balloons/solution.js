// Problem: Maximum Number of Balloons
// LeetCode: https://leetcode.com/problems/maximum-number-of-balloons/
// Language: javascript
// Runtime: 67 ms
// Memory: 45.4 MB
// Submitted: 2023-05-26

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let s = "balloon"

    let obj = {}
    let obj2 = {}

    for (let c of s) {
        obj[c] = obj[c] || 0
        obj[c]++
    }

    let an = Infinity


    for (let c of text) {
        obj2[c] = obj2[c] || 0
        obj2[c]++
    }

    for (let k in obj) {
        let x = Math.floor((obj2[k] || 0) / obj[k])
        an = Math.min(an, x)
    }

    return an;
};
