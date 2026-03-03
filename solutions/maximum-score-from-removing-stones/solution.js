// Problem: Maximum Score From Removing Stones
// LeetCode: https://leetcode.com/problems/maximum-score-from-removing-stones/
// Language: javascript
// Runtime: 66 ms
// Memory: 41.9 MB
// Submitted: 2023-07-21

var maximumScore = function (x, y, z) {
  // sort ascending
  [x, y, z] = [x, y, z].sort((a, b) => a - b);

  // make   z equal to y     by pairing with x
  // equally distribute x    to y & z
  // take min of remaining y & z

  let s = 0
  let extra = z - y
  if (x >= extra) {
    s += extra
    z -= extra
    x -= extra
  } else {
    s += x
    z -= x
    x -= x
  }

  if (x) {
    if (x % 2 === 0) {
      y -= x / 2
      z -= x / 2
      s += x
      x -= x
    } else {
      z -= 1
      x -= 1
      s += 1

      y -= x / 2
      z -= x / 2
      s += x
      x -= x
    }
  }

  s += Math.min(y, z)
  return s
};

