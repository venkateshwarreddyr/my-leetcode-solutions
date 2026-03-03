// Problem: Shortest Path in Binary Matrix
// LeetCode: https://leetcode.com/problems/shortest-path-in-binary-matrix/
// Language: javascript
// Runtime: 160 ms
// Memory: 52.2 MB
// Submitted: 2023-07-17

class Matrix {
    set(M) {
        this.M = M;
        this.m = M.length;
        this.n = M[this.m - 1].length;
    }
    constructor(M) {
        if (M) this.set(M);
    }

    cell = (x1, y1) => x1 + "," + y1;

    bfs__shortestPathBinaryMatrix() {
        let { M, m, n, cell } = this;

        let depth = 0;
        let visited = new Set();
        let queue = [[0, 0]];
        while (queue.length) {
            depth++;
            let queueNEW = [];
            for (let [x1, y1] of queue) {
                if (visited.has(cell(x1, y1))) continue;
                visited.add(cell(x1, y1));

                if (
                    x1 === m - 1 && //
                    y1 === n - 1
                )
                    return depth;

                // left/W,  right/E,  top/N/WN/EN,  bottom/WS/S/ES
                for (let dx = -1; dx <= 1; dx++)
                    for (let dy = -1; dy <= 1; dy++) {
                        if (dx === 0 && dy === 0) continue;
                        let [x2, y2] = [x1 + dx, y1 + dy];
                        if (x2 < 0 || x2 >= m || y2 < 0 || y2 >= n || M[x2][y2] === 1) continue; // out of bounds
                        queueNEW.push([x2, y2]);
                        M[x2][y2] = 1;
                    }
            }
            queue = queueNEW;
        }
        return -1;
    }

    shortestPathBinaryMatrix() {
        let { M, m, n } = this;
        if (
            M[0][0] === 1 || //
            M[m - 1][n - 1] === 1
        )
            return -1;
        return this.bfs__shortestPathBinaryMatrix();
    }
}

var shortestPathBinaryMatrix = function (M) {
    return new Matrix(M).shortestPathBinaryMatrix();
};
