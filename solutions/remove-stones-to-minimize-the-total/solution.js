// Problem: Remove Stones to Minimize the Total
// LeetCode: https://leetcode.com/problems/remove-stones-to-minimize-the-total/
// Language: javascript
// Runtime: 1018 ms
// Memory: 60.6 MB
// Submitted: 2023-07-13

function minStoneSum(piles, k) {
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const pq = new PriorityQueue({ compare: (a, b) => b - a });
    for (let e of piles) pq.enqueue(e)

    while (k--) {
        pq.enqueue(Math.ceil(pq.dequeue() / 2))
    }
    let sum = 0
    while (!pq.isEmpty()) {
        sum += pq.dequeue()
    }
    return sum
}


