// Problem: K Highest Ranked Items Within a Price Range
// LeetCode: https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/
// Language: javascript
// Runtime: 473 ms
// Memory: 101.4 MB
// Submitted: 2025-12-15

const SIDES_LRTD = [[-1, 0], [1, 0], [0, 1], [0, -1]];
const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;

var highestRankedKItems = function (g, [lowPrice, highPrice], [startRow, startCol], k) {
    let m = g.length
    let n = g[0].length

    let ans = [];
    let vis = Array.from({ length: m }, () => new Array(n).fill(false))
    let pq = new PriorityQueue(([i1, j1, d1], [i2, j2, d2]) =>
        (d1 - d2) || (g[i1][j1] - g[i2][j2]) || (i1 - i2) || (j1 - j2))

    pq.enqueue([startRow, startCol, 0]);
    vis[startRow][startCol] = true;
    while (!pq.isEmpty()) {
        let [i, j, d] = pq.dequeue();
        if ((g[i][j] > 1) && (lowPrice <= g[i][j] && g[i][j] <= highPrice)) {
            ans.push([i, j]);
            if (ans.length === k) return ans
        }
        for (let [dx, dy] of SIDES_LRTD) {
            let ni = i + dx
            let nj = j + dy
            if (!matrixOutOfBounds(ni, nj, m, n) && g[ni][nj] !== 0 && !vis[ni][nj]) {
                pq.enqueue([ni, nj, d + 1]);
                vis[ni][nj] = true;
            }
        }
    }

    return ans;
};

