// Problem: Projection Area of 3D Shapes
// LeetCode: https://leetcode.com/problems/projection-area-of-3d-shapes/
// Language: javascript
// Runtime: 70 ms
// Memory: 42.7 MB
// Submitted: 2023-07-15

var projectionArea = function (g) {
  let m = g.length
  let n = g[0].length
 
  let rsums = [];
  for (let r = 0; r < m; r++) {
    rsums[r] = 0;
    for (let c = 0; c < g[r].length; c++) {
      rsums[r] = Math.max(rsums[r], g[r][c]);
    }
  }
 
  let csums = [];
  for (let c = 0; c < n; c++) {
    csums[c] = 0;
    for (let r = 0; r < m; r++) {
      csums[c] = Math.max(csums[c], g[r][c]);
    }
  }
 
  let area = 0;
  for (let r = 0; r < m; r++)    area += rsums[r];
  for (let c = 0; c < n; c++)    area += csums[c];
 
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < g[r].length; c++) {
      if (g[r][c]) {
        // positive cells
        area++;
      }
    }
  }
  return area;
};
