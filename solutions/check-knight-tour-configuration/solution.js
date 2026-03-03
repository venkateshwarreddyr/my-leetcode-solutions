// Problem: Check Knight Tour Configuration
// LeetCode: https://leetcode.com/problems/check-knight-tour-configuration/
// Language: javascript
// Runtime: 84 ms
// Memory: 46.1 MB
// Submitted: 2023-07-16

var checkValidGrid = function (g) {
  let m = g.length
  let n = g[0].length

  function nexts(i, j) {
    return [
      [i - 2, j - 1], [i - 2, j + 1], // up   2 - left, right
      [i + 2, j - 1], [i + 2, j + 1], // down 2 - left, right

      [i - 1, j - 2], [i - 1, j + 2], // up   2 - left, right
      [i + 1, j - 2], [i + 1, j + 2], // down 2 - left, right
    ]
  }

  let c = 0
  let s = 0, e = 0
  for (; c < n * n; c++) {
    let a = nexts(s, e)
    let foundnext = false

    let curv = g[s]?.[e]

    for (let [i, j] of a) {
      let ns = i
      let ne = j
      if (ns >= 0 && ns < n && ne >= 0 && ne < n) {
        if (g[ns][ne] === (curv + 1)) {
          // good
          foundnext = true
          s = ns;
          e = ne;
          break
        }
      }
    }

    if (!foundnext) break
  }

  return c === n * n - 1
};
