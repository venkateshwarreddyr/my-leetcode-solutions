// Problem: Simplified Fractions
// LeetCode: https://leetcode.com/problems/simplified-fractions/
// Language: javascript
// Runtime: 87 ms
// Memory: 48.2 MB
// Submitted: 2023-08-06

var simplifiedFractions = function (N) {
  let s1 = new Set()
  let an = []
  for (let n = 1; n < N; n++) {
    for (let d = 2; d <= N; d++) {
      if (((n / d) > 0) && ((n / d) < 1)) {
        // simplified - 1/2 & 2/4 are same
        if (s1.has(n / d)) continue
        s1.add(n / d)

        an.push(n + '/' + d)
      }
    }
  }
  return an
};
