// Problem: Kth Largest Element in an Array
// LeetCode: https://leetcode.com/problems/kth-largest-element-in-an-array/
// Language: javascript
// Runtime: 130 ms
// Memory: 54.8 MB
// Submitted: 2023-08-14

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (a, k) {
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const pq = new PriorityQueue({ compare: (a, b) => b - a });
    for (let e of a) pq.enqueue(e)
    while (--k) {
        pq.dequeue()
    }
    return pq.dequeue()
};
