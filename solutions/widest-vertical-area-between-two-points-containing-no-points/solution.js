// Problem: Widest Vertical Area Between Two Points Containing No Points
// LeetCode: https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/
// Language: javascript
// Runtime: 173 ms
// Memory: 62 MB
// Submitted: 2023-06-16

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let n = points.length
  points = points.sort((a, b) => a[0] - b[0])
  let an = 0
  for (let i = 0; i < n - 1; i++) {
    an = Math.max(an, points[i + 1][0] - points[i][0])
  }

  return an;
};
