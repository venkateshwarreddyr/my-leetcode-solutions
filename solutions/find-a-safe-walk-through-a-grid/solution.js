// Problem: Find a Safe Walk Through a Grid
// LeetCode: https://leetcode.com/problems/find-a-safe-walk-through-a-grid/
// Language: javascript
// Runtime: 56 ms
// Memory: 62.9 MB
// Submitted: 2025-08-30

/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function (grid, health) {
    const n = grid.length;
    const m = grid[0].length;
    const dist = Array.from({ length: n }, () => Array(m).fill(Infinity));
    dist[0][0] = grid[0][0];

    const pq = new PriorityQueue((a, b) => a[0] - b[0]);
    pq.enqueue([dist[0][0], 0, 0]);
    const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];

    while (!pq.isEmpty()) {
        const [d, i, j] = pq.dequeue();
        if (d > dist[i][j]) continue;
        if (i === n - 1 && j === m - 1) return health - d > 0;
        for (let [is, js] of dirs) {
            const x = i + is;
            const y = j + js;
            if (x >= 0 && x < n && y >= 0 && y < m) {
                const t = d + grid[x][y];
                if (t < dist[x][y]) {
                    dist[x][y] = t;
                    pq.enqueue([t, x, y]);
                }
            }
        }
    }

};
