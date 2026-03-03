// Problem: Minimum Amount of Time to Fill Cups
// LeetCode: https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/
// Language: javascript
// Runtime: 90 ms
// Memory: 44.2 MB
// Submitted: 2023-07-13

/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
    let cc = 0
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const pq = new PriorityQueue({ compare: (a, b) => b - a });
    for (let e of amount) pq.enqueue(e)

    while (pq.front()) {
        let f = pq.dequeue()
        let s = pq.dequeue()

        pq.enqueue(f - 1)
        pq.enqueue(s - 1)
        cc++
    }
    return cc
};
