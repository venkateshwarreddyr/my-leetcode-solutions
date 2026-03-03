// Problem: Maximal Score After Applying K Operations
// LeetCode: https://leetcode.com/problems/maximal-score-after-applying-k-operations/
// Language: javascript
// Runtime: 256 ms
// Memory: 58.1 MB
// Submitted: 2023-07-13

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (a, k) {
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const pq = new PriorityQueue({ compare: (a, b) => b - a });
    for (let e of a) pq.enqueue(e)
    let sum = 0

    while (k--) {
        let x = pq.dequeue()
        sum += x
        pq.enqueue(Math.ceil(x / 3))
    }

    return sum
};

