// Problem: Minimize Maximum Value in a Grid
// LeetCode: https://leetcode.com/problems/minimize-maximum-value-in-a-grid/
// Language: javascript
// Runtime: 353 ms
// Memory: 75.1 MB
// Submitted: 2024-04-30

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var minScore = function (grid) {
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const pq = new PriorityQueue({ compare: (a, b) => a.val - b.val }); // increasing
    
    let m = grid.length
    let n = grid[0].length

    let rows = new Array(m).fill(0)
    let cols = new Array(n).fill(0)

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            pq.enqueue({
                val: grid[i][j],
                i, j
            })
        }
    }

    while (pq.size()) {
        let { i, j } = pq.dequeue()
        grid[i][j] = 1 + Math.max(rows[i], cols[j])
        rows[i] = cols[j] = grid[i][j]
    }

    return grid
};
