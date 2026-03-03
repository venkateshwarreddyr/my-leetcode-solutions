// Problem: Grumpy Bookstore Owner
// LeetCode: https://leetcode.com/problems/grumpy-bookstore-owner/
// Language: javascript
// Runtime: 1 ms
// Memory: 59.1 MB
// Submitted: 2025-11-20

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
    let n = customers.length
    let total = 0
    // 1 = grumpy = 1 - grumpy[i]
    for (let i = 0; i < n; i++) {
        total += (1 - grumpy[i]) * customers[i]
    }

    for (let i = 0; i < minutes; i++) {
        total += (grumpy[i]) * customers[i]
    }
    let max = total
    for (let i = minutes; i < n; i++) {
        total += (grumpy[i]) * customers[i]
        total -= (grumpy[i - minutes]) * customers[i - minutes]

        max = Math.max(total, max)
    }


    return max


};
