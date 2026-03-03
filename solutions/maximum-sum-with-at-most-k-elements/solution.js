// Problem: Maximum Sum With at Most K Elements
// LeetCode: https://leetcode.com/problems/maximum-sum-with-at-most-k-elements/
// Language: javascript
// Runtime: 409 ms
// Memory: 83 MB
// Submitted: 2025-10-29

var maxSum = function (g, limits, k) {
    let n = g.length
    let pq = new PriorityQueue((a, b) => a - b)
    for (let i = 0; i < n; i++) {
        let lpq = new PriorityQueue((a, b) => a - b)
        for (let x of g[i]) {
            lpq.enqueue(x)
            if (lpq.size() > limits[i]) {
                lpq.dequeue()
            }
        }
        while (!lpq.isEmpty()) {
            pq.enqueue(lpq.dequeue())
            if (pq.size() > k) {
                pq.dequeue()
            }
        }
    }
    let sum = 0
    while (!pq.isEmpty()) {
        sum += pq.dequeue()
    }
    return sum
};

