// Problem: Smallest Divisible Digit Product I
// LeetCode: https://leetcode.com/problems/smallest-divisible-digit-product-i/
// Language: javascript
// Runtime: 2 ms
// Memory: 55.9 MB
// Submitted: 2025-08-03

var smallestNumber = function (n, t) {
  const digitProduct = (x) => {
    return ('' + x)
      .split("")
      .map(Number)
      .reduce((p, d) => p * d, 1)
  }

  for (let x = n; ; x++) {
    if (digitProduct(x) % t === 0) {
      return x
    }
  }
};

