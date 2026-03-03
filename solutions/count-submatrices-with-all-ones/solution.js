// Problem: Count Submatrices With All Ones
// LeetCode: https://leetcode.com/problems/count-submatrices-with-all-ones/
// Language: javascript
// Runtime: 10 ms
// Memory: 56.4 MB
// Submitted: 2025-08-21

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
    let m = mat.length
    let n = mat[0].length
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j]) {
                mat[i][j] += mat[i - 1][j]
            }
        }
    }

    let an = 0
    let min = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j]) {
                min = mat[i][j]

                for (let k = j + 1; k < n; k++) {
                    if (mat[i][k]) {
                        min = Math.min(min, mat[i][k])
                        mat[i][j] += min
                    } else {
                        break;
                    }
                }
            }
            an += mat[i][j]
        }
    }

    return an
};

/**
[1,0,1],
[2,1,0],
[3,2,0]

 */
