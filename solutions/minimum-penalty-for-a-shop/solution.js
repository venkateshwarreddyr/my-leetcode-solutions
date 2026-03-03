// Problem: Minimum Penalty for a Shop
// LeetCode: https://leetcode.com/problems/minimum-penalty-for-a-shop/
// Language: javascript
// Runtime: 13 ms
// Memory: 57.3 MB
// Submitted: 2025-12-26

/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (s) {

    let cc = 0
    let max = 0
    let maxi = 0
    let i = 0
    for (let c of s) {
        if (c === "Y") {
            cc++
        } else {
            cc--
        }
        if (cc > max) {
            max = cc
            maxi = i + 1
        }

        i++
    }

    return maxi;
};
