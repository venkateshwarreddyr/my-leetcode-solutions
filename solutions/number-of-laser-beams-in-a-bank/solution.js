// Problem: Number of Laser Beams in a Bank
// LeetCode: https://leetcode.com/problems/number-of-laser-beams-in-a-bank/
// Language: javascript
// Runtime: 42 ms
// Memory: 65.8 MB
// Submitted: 2025-10-27

/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let a = []

    for (let str of bank) {
        a.push(str.replaceAll("0", "").length)
    }

    let sm = 0;
    let prev = null;
    for (let i = 0; i < a.length; i++) {
        if (a[i]) {
            sm += (prev === null ? 0 : prev) * a[i]
            prev = a[i]
        }
    }
    return sm
};
