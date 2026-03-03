// Problem: Minimum Obstacle Removal to Reach Corner
// LeetCode: https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/
// Language: javascript
// Runtime: 332 ms
// Memory: 84.8 MB
// Submitted: 2023-08-26

let sides = [
    [-1, 0], //   N
    [0, -1], //   W
    [0, 1], //    E
    [1, 0], //    S
];
const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;

var minimumObstacles = function (grid) {
    function bfs() {
        let m = grid.length
        let n = grid[0].length
        let vis = Array.from({ length: m }, () => new Array(n))
        vis[0][0] = 1
        function bfs_() {
            const { PriorityQueue } = require("@datastructures-js/priority-queue");
            const pq = new PriorityQueue({ compare: (a, b) => a[2] - b[2] }); // increasing
            pq.enqueue([0, 0, 0])

            while (!pq.isEmpty()) {
                let [u, v, c] = pq.dequeue();
                if (u === m - 1 && v === n - 1) {
                    return c
                }
                for (let [si, sj] of sides) {
                    if (!matrixOutOfBounds(u + si, v + sj, m, n)) {
                        if (!vis[u + si][v + sj]) {
                            pq.enqueue([u + si, v + sj, c + grid[u + si][v + sj]])
                            vis[u + si][v + sj] = 1
                        }
                    }
                }

            }

        }
        return bfs_()
    }


    return bfs()
}
