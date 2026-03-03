// Problem: Minimum Operations to Write the Letter Y on a Grid
// LeetCode: https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/
// Language: javascript
// Runtime: 79 ms
// Memory: 55.2 MB
// Submitted: 2024-04-16

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperationsToWriteY = function (g) {
    let n = g.length;

    let mid = Math.floor(n / 2)

    let set = new Set()

    for (let i = 0, j = 0; i < mid; i++, j++) {
        set.add(i * n + j)
    }


    for (let i = mid, j = mid; i > -1; i--, j++) {
        set.add(i * n + j)
    }

    for (let i = mid, j = mid; i < n; i++) {
        set.add(i * n + j)
    }

    let obo = new Array(3).fill(0)
    let oby = new Array(3).fill(0)

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let x = i * n + j
            if(set.has(x)) {
                oby[g[i][j]] =   oby[g[i][j]] || 0
                  oby[g[i][j]]++
            } else {
  obo[g[i][j]] =   obo[g[i][j]] || 0
                  obo[g[i][j]]++
            }

        }
    }


    let obosum = obo.reduce((a, c) => a+c, 0)
    let obysum = oby.reduce((a, c) => a+c, 0)
    let total = obosum + obysum

    let min = Infinity
    for(let i=0;i<3;i++) {
        for(let j=0;j<3;j++) {
            if(i !== j) {
                min = Math.min(min, total - obo[i] - oby[j])
            }
        }
    }

    return min

};
