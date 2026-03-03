// Problem: K Closest Points to Origin
// LeetCode: https://leetcode.com/problems/k-closest-points-to-origin/
// Language: javascript
// Runtime: 262 ms
// Memory: 61.1 MB
// Submitted: 2023-07-13

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    const { MinPriorityQueue } = require("@datastructures-js/priority-queue");
    const pq = new MinPriorityQueue({ compare: ([x1, y1], [x2, y2]) => x1 ** 2 + y1 ** 2 - (x2 ** 2 + y2 ** 2) }); // smaller first / higher priority
    points.forEach(e => pq.enqueue(e))

    let a = []
    while (!pq.isEmpty() && k) {
        let x = pq.dequeue()
        a.push(x)
        k--
    }

    return a;
};
