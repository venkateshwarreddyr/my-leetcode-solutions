// Problem: Difference Between Ones and Zeros in Row and Column
// LeetCode: https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/
// Language: javascript
// Runtime: 443 ms
// Memory: 117 MB
// Submitted: 2023-07-15

var onesMinusZeros = function (g) {

    let m = g.length;
    let n = g[0].length;



    let row0cc = new Array(m).fill(0); // zero counts for each row

    let col0cc = new Array(n).fill(0); // zero counts for each col

    let row1cc = new Array(m).fill(0); // one  counts for each row

    let col1cc = new Array(n).fill(0); // one  counts for each col



    for (let i = 0; i < m; i++)

        for (let j = 0; j < n; j++) {

            row0cc[i] += g[i][j] === 0;

            col0cc[j] += g[i][j] === 0;

            row1cc[i] += g[i][j] === 1;

            col1cc[j] += g[i][j] === 1;

        }



    let g2 = Array.from({ length: m }, () => Array(n));

    for (let i = 0; i < m; i++)

        for (let j = 0; j < n; j++) {

            g2[i][j] = row1cc[i] + col1cc[j] - row0cc[i] - col0cc[j];

        }

    return g2;

}

