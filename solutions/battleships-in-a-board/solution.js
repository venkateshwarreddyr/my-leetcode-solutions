// Problem: Battleships in a Board
// LeetCode: https://leetcode.com/problems/battleships-in-a-board/
// Language: javascript
// Runtime: 57 ms
// Memory: 42.7 MB
// Submitted: 2023-07-15

var countBattleships = function (g) {
  let m = g.length;
  let n = g[0].length;
 
  function noAdjLineCount() {
    let cc = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (
          g[i][j] !== "X" || //                          no X here
          (i - 1 >= 0 && g[i - 1][j] === "X") || //      X is above
          (j - 1 >= 0 && g[i][j - 1] === "X") //         X is left
        ) continue;
        cc++;
      }
    }
    return cc;
  }
  return noAdjLineCount();
};
