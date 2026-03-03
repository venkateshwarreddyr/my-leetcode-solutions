// Problem: Find Minimum Time to Reach Last Room I
// LeetCode: https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/
// Language: javascript
// Runtime: 97 ms
// Memory: 65.7 MB
// Submitted: 2025-08-30

function minTimeToReach(moveTime) {
    const n = moveTime.length;
    const m = moveTime[0].length;
    const dist = Array.from({ length: n }, () => Array(m).fill(Infinity));
    dist[0][0] = 0;

    const pq = new PriorityQueue((a, b) => a[0] - b[0]);
    pq.enqueue([0, 0, 0]);
    const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];

    while (!pq.isEmpty()) {
        const [d, i, j] = pq.dequeue();
        if (d > dist[i][j]) continue;
        if (i === n - 1 && j === m - 1) return d;
        for (let [is, js] of dirs) {
            const x = i + is;
            const y = j + js;
            if (x >= 0 && x < n && y >= 0 && y < m) {
                const t = Math.max(moveTime[x][y], d) + 1;
                if (t < dist[x][y]) {
                    dist[x][y] = t;
                    pq.enqueue([t, x, y]);
                }
            }
        }
    }

    return -1;
}
