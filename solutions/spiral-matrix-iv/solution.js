// Problem: Spiral Matrix IV
// LeetCode: https://leetcode.com/problems/spiral-matrix-iv/
// Language: javascript
// Runtime: 511 ms
// Memory: 103.3 MB
// Submitted: 2023-07-15


var spiralMatrix = function (m, n, h) {
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1],]
    let a = Array.from({ length: m }, x => new Array(n).fill(-1))

    let t = h

    let i = 0
    let r = 1, c = 0;
    while (t) {
        let [dr, dc] = dirs[i] // delta
        let [nr, nc] = [r + dr, c + dc]; // new

        if (nr >= 0 && nr < m && nc >= 0 && nc < n && a[nr][nc] === -1) {
            [r, c] = [nr, nc];
            a[r][c] = t.val;
            t = t.next;
        } else {
            i += 1;
            i = i % 4;
        }
    }
    return a;
};


