// Problem: Count Servers that Communicate
// LeetCode: https://leetcode.com/problems/count-servers-that-communicate/
// Language: javascript
// Runtime: 84 ms
// Memory: 49 MB
// Submitted: 2023-07-16

var countServers = function (g) {
  let m = g.length;
  let n = g[0].length;
  const getKey = (i, j) => i + "," + j;
  let setAns = new Set();
  for (let i = 0; i < m; i++) {
    let s = 0; let set = new Set();
    for (let j = 0; j < n; j++)
      if (g[i][j]) {
        s++;
        set.add(getKey(i, j));
      }
    if (s > 1)
      for (let e of set) setAns.add(e);
  }
  for (let j = 0; j < n; j++) {
    let s = 0; let set = new Set();
    for (let i = 0; i < m; i++)
      if (g[i][j]) {
        s++; set.add(getKey(i, j));
      }
    if (s > 1)
      for (let e of set) setAns.add(e);
  }
  return setAns.size;
};
