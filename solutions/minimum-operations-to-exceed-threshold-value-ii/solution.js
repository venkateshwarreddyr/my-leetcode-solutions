// Problem: Minimum Operations to Exceed Threshold Value II
// LeetCode: https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/
// Language: javascript
// Runtime: 219 ms
// Memory: 76.2 MB
// Submitted: 2024-04-16

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(a, k) {
      const { PriorityQueue } = require("@datastructures-js/priority-queue");
  const pq = new PriorityQueue({ compare: (a, b) => a - b }); // increasing
  for (let e of a) pq.enqueue(e);
    let cc = 0
  while(pq.front()<k) {
    let first = pq.dequeue()
    let second = pq.dequeue()
     pq.enqueue(first * 2 + second)
    cc++
  }

  return cc
};
