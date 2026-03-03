// Problem: Time Needed to Buy Tickets
// LeetCode: https://leetcode.com/problems/time-needed-to-buy-tickets/
// Language: javascript
// Runtime: 61 ms
// Memory: 42 MB
// Submitted: 2023-05-26

cl = console.log
var timeRequiredToBuy = function (tickets, k) {
    let n = tickets.length

    let i = 0
    let j = 0
    while (tickets[k] !== 0) {
        if (tickets[i % n]) {
            tickets[i % n]--
            j++
        }
        i++
    }

    return j
};
