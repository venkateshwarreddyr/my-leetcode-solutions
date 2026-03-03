// Problem: Divide Intervals Into Minimum Number of Groups
// LeetCode: https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/
// Language: javascript
// Runtime: 286 ms
// Memory: 69.5 MB
// Submitted: 2023-07-14

cl = console.log
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
    const pq = new PriorityQueue({ compare: (a, b) => a - b });
    intervals.sort((a, b) => a[0] - b[0])
    pq.enqueue(intervals[0][1])
    let n = intervals.length;

    for (let i = 1; i < n; i++) {
        if (intervals[i][0] > pq.front()) {
            pq.dequeue()
        }
        pq.enqueue(intervals[i][1])
    }

    return pq.size()
};
