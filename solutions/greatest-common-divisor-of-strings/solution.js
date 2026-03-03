// Problem: Greatest Common Divisor of Strings
// LeetCode: https://leetcode.com/problems/greatest-common-divisor-of-strings/
// Language: javascript
// Runtime: 81 ms
// Memory: 44.1 MB
// Submitted: 2023-05-29

cl = console.log
var gcdOfStrings = function (s, t) {
  let n = s.length < t.length ? s.length : t.length
  for (let i = n - 1; i > -1; i--) {
    if (s.slice(0, i + 1) === t.slice(0, i + 1)) {
      let x = s.slice(0, i + 1);
      if (s.replaceAll(x, "") === "" && t.replaceAll(x, "") === "") {
        return x;
      }
    }
  }

  return ''
};
