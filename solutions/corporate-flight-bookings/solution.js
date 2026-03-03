// Problem: Corporate Flight Bookings
// LeetCode: https://leetcode.com/problems/corporate-flight-bookings/
// Language: javascript
// Runtime: 145 ms
// Memory: 63.7 MB
// Submitted: 2023-06-15

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
    let an = new Array(n).fill(0);
    for (let [f, l, s] of bookings) {
        an[f - 1] += s
        if (l < n)
            an[l] -= s
    }

    for (let i = 1; i < an.length; i++) {
        an[i] += an[i - 1]
    }

    return an
};
