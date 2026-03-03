// Problem: Fair Candy Swap
// LeetCode: https://leetcode.com/problems/fair-candy-swap/
// Language: javascript
// Runtime: 89 ms
// Memory: 51.6 MB
// Submitted: 2023-05-26

cl = console.log
var fairCandySwap = function (a, b) {
  let asum = a.reduce((a, c) => a + c, 0)
  let bsum = b.reduce((a, c) => a + c, 0)
  let diff = (asum - bsum) / 2
  a = new Set(a)
  for (let e of b) {
    if (a.has(e + diff)) {
      return [e + diff, e]
    }
  }
};
