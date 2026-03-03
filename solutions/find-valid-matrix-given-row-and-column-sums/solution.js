// Problem: Find Valid Matrix Given Row and Column Sums
// LeetCode: https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/
// Language: javascript
// Runtime: 217 ms
// Memory: 68 MB
// Submitted: 2024-07-20


var restoreMatrix = function (rowSums, colSums) {
  let m = rowSums.length;
  let n = colSums.length;

  let g = Array.from({ length: m }, (_) => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    g[i][0] = rowSums[i]
  }

  for (let j = 0; j < n; j++) {
    let colSumTillNow = 0;

    for (let i = 0; i < m; i++) {
      if (colSumTillNow == colSums[j]) {
        // take none - no more in this col, move load to right
        // colSumTillNow remains same
        if (g[i][j] > 0) {
          g[i][j + 1] = g[i][j];
          g[i][j] = 0;
        }
      } else if (colSumTillNow < colSums[j]) {
        if (colSumTillNow + g[i][j] <= colSums[j]) {
          // take all
          colSumTillNow += g[i][j];
          // g remains same
        } else {
          let need = colSums[j] - colSumTillNow
          let remaining = g[i][j] - need;
          colSumTillNow += need;
          g[i][j] = need;
          g[i][j + 1] = remaining;
        }
      }
    }
  }
  return g;
};
