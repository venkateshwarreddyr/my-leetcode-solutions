// Problem: Check If Digits Are Equal in String After Operations I
// LeetCode: https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/
// Language: javascript
// Runtime: 12 ms
// Memory: 58.3 MB
// Submitted: 2025-10-23

var hasSameDigits = function (s) {
  if (s.length === 0) return false
  if (s.length === 1) return false

  let a = [...s].map(e => +e)

  let len = a.length
  while (len > 2) {
    for (let i = 0; i + 1 < len; i++) {
      a[i] = (+a[i] + +a[i + 1]) % 10
    }
    len--
  }

  return a[0] === a[1]
};

var hasSameDigits_2 = function (s) {
  if (s.length === 0) return false
  if (s.length === 1) return false

  while (s.length > 2) {
    let t = ''
    for (let i = 0; i + 1 < s.length; i++) {
      t += (+s[i] + +s[i + 1]) % 10
    }
    s = t
  }

  return s[0] === s[1]
};
