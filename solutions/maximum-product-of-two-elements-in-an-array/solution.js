// Problem: Maximum Product of Two Elements in an Array
// LeetCode: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
// Language: javascript
// Runtime: 76 ms
// Memory: 43.7 MB
// Submitted: 2023-07-13

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (a) {
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const pq = new PriorityQueue({ compare: (a, b) => b - a }); // smaller first / higher priority
    a.forEach(e => pq.enqueue(e))
    return (pq.dequeue() - 1) * (pq.dequeue() - 1)
};
