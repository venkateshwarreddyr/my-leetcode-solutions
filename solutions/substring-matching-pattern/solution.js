// Problem: Substring Matching Pattern
// LeetCode: https://leetcode.com/problems/substring-matching-pattern/
// Language: javascript
// Runtime: 1 ms
// Memory: 56.2 MB
// Submitted: 2025-08-03

var hasMatch = function (s, p) {
  let [l, r] = p.split('*')
  let li = s.indexOf(l)
  let ri = s.lastIndexOf(r)

  if (l && r) {
    return (li !== -1) && (ri !== -1) && (li + l.length <= ri)
  }

  if (l) {
    return li !== -1
  } else if (r) {
    return ri !== -1
  }

  return true
};

