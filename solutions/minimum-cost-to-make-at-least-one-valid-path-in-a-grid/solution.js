// Problem: Minimum Cost to Make at Least One Valid Path in a Grid
// LeetCode: https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/
// Language: javascript
// Runtime: 137 ms
// Memory: 50.2 MB
// Submitted: 2023-08-16

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    let m = grid.length;
    let n = grid[0].length;
    let sides = [
        [-1, 0, 4], //   N
        [0, -1, 2], //   W
        [0, 1, 1], //    E
        [1, 0, 3], //    S
    ];
    const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;
    let vis = Array.from({ length: m }, () => new Array(n))
    const bfs = (i, j) => {
        const pq = new PriorityQueue({ compare: (a, b) => a[2] - b[2] }); // increasing
        pq.enqueue([i, j, 0]);

        while (pq.length != 0) {
            let [i, j, cost] = pq.dequeue();
            if (i === m - 1 && j === n - 1) return cost;
            vis[i][j] = 1

            for (let [si, sj, d] of sides) {
                let x = i + si
                let y = j + sj
                if (!matrixOutOfBounds(x, y, m, n) && !vis[x][y]) {
                    pq.enqueue([x, y, cost + (d === grid[i][j] ? 0 : 1)]);
                    // vis[x][y] = 1
                }
            }

        }
    };

    return bfs(0, 0)
};
