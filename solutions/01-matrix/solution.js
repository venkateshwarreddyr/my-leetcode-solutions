// Problem: 01 Matrix
// LeetCode: https://leetcode.com/problems/01-matrix/
// Language: javascript
// Runtime: 62 ms
// Memory: 68.7 MB
// Submitted: 2025-10-21

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let m = mat.length
    let n = mat[0].length
    const q = []

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) q.push([i, j, 0])
            else mat[i][j] = Infinity
        }
    }
    const dir = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ]
  const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;

    while (q.length) {
        const [i, j, distSoFar] = q.shift()

        for(let [dx, dy] of dir) {
            let ni = i + dx
            let nj = j + dy

            if(matrixOutOfBounds(ni, nj, m, n)) continue
            if(mat[ni][nj] === Infinity) {
                mat[ni][nj] = distSoFar + 1
                q.push([ni, nj, distSoFar + 1])
            }
        }

    }

    return mat
};
