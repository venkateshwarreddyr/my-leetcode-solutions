// Problem: Lucky Numbers in a Matrix
// LeetCode: https://leetcode.com/problems/lucky-numbers-in-a-matrix/
// Language: javascript
// Runtime: 63 ms
// Memory: 45.2 MB
// Submitted: 2023-07-15

var luckyNumbers = function (g) {
  let res = [];
 
  for (let i = 0; i < g.length; i++) {
    let mini = 0;
    let min = g[i][0];
 
    for (let j = 1; j < g[i].length; j++)
      if (g[i][j] < min) {
        min = g[i][j];
        mini = j;
      }
 
    let issue = false;
    let max = min; // of mini col
    for (let r = 0; r < g.length; r++)
      if (g[r][mini] > max) {
        issue = true;
      }
    if (!issue) res.push(max);
  }
 
  return res;
};
