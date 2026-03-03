// Problem: Maximum Product of Two Digits
// LeetCode: https://leetcode.com/problems/maximum-product-of-two-digits/
// Language: javascript
// Runtime: 1 ms
// Memory: 54.6 MB
// Submitted: 2025-08-03

var maxProduct = function (n) {
  let digits = ('' + n).split("").map(Number)
  digits.sort((a, b) => b - a)
  return digits[0] * digits[1]
};

var maxProduct_2 = function (n) {
  let digits = ('' + n).split("").map(Number)
  let maxp = 0
  for (let i = 0; i < digits.length; i++) {
    for (let j = i + 1; j < digits.length; j++) {
      let p = digits[i] * digits[j]
      maxp = Math.max(maxp, p)
    }
  }
  return maxp
};

