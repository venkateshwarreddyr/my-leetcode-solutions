// Problem: Hexadecimal and Hexatrigesimal Conversion
// LeetCode: https://leetcode.com/problems/hexadecimal-and-hexatrigesimal-conversion/
// Language: javascript
// Runtime: 2 ms
// Memory: 57.3 MB
// Submitted: 2025-08-03

var concatHex36 = function (n) {
  let alphas = []
  for (let i = 0; i < 10; i++) alphas.push(i)
  for (let i = 0; i < 26; i++) {
    alphas.push(String.fromCharCode('A'.charCodeAt(0) + i))
  }

  const toString = (n, base = 16) => {
    let s = ''
    while (n > 0) {
      let r = n % base
      s = alphas[r] + s
      n = Math.trunc(n / base)
    }
    return s
  }

  return toString(n * n, 16) + toString(n * n * n, 36)
};

var concatHex36_2 = function (n) {
  let hd = (n * n).toString(16)
  let htg = (n * n * n).toString(36)
  return (hd + htg).toUpperCase()
};

