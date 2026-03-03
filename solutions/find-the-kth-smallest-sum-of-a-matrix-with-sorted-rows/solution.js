// Problem: Find the Kth Smallest Sum of a Matrix With Sorted Rows
// LeetCode: https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/
// Language: javascript
// Runtime: 224 ms
// Memory: 47 MB
// Submitted: 2023-09-23

// SOLUTION 1
// SLOW SOLUTION BUT PASSES
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (grid, k) {
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const pq = new PriorityQueue({ compare: (a, b) => b - a }); // decreasing

    pq.enqueue(0);
    for (let i = 0; i < grid.length; i++) {
        const values = [];
        while (!pq.isEmpty()) {
            values.push(pq.dequeue())
        }

        for (let e of values) {
            for (let colValue of grid[i]) {
                pq.enqueue(e + colValue);
                if (pq.size() > k) pq.dequeue();
            }
        }
    }
    
    return pq.dequeue();
};

