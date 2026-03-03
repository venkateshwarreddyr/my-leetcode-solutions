// Problem: The Number of Beautiful Subsets
// LeetCode: https://leetcode.com/problems/the-number-of-beautiful-subsets/
// Language: javascript
// Runtime: 292 ms
// Memory: 48.7 MB
// Submitted: 2023-07-12

var beautifulSubsets = function (A, k) {

  function bt(a) {
    let n = a.length
    if (n === 0) return 0
    let s = 0
    for (let i = 0; i < n; i++) {
      let b = []
      for (let j = i + 1; j < n; j++) {
        if (Math.abs(a[i] - a[j]) !== k) {
          b.push(a[j])
        }
      }
      s += 1 + bt(b)
    }
    return s
  }

  let s = bt(A)
  return s
};
