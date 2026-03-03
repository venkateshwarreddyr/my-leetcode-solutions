// Problem: Bitwise XOR of All Pairings
// LeetCode: https://leetcode.com/problems/bitwise-xor-of-all-pairings/
// Language: javascript
// Runtime: 80 ms
// Memory: 53.2 MB
// Submitted: 2023-07-19

// Time Limit Exceeded
var xorAllNums1 = function (a, b) {
  let x = 0;
  for (let e of a)
    for (let e2 of b) {
      x = x ^ e ^ e2;
    }
  return x;
};

// Pass
var xorAllNums = function (a, b) {
  let x = 0;

  if (a.length % 2 === 1)
    for (let e of b) x = x ^ e;

  if (b.length % 2 === 1)
    for (let e of a) x = x ^ e;

  return x;
};



































var xorAllNums = function (a, b) {
  let x = 0
  for (let e of a) {
    for (let e2 of b) {
      x = x ^ e ^ e2
    }
  }
  return x
}



var xorAllNums = function (a, b) {
  let x = 0

  if (a.length % 2) {
    for (let e2 of b) {
      x = x ^ e2
    }
  }
  if (b.length % 2) {
    for (let e of a) {
      x = x ^ e
    }
  }

  return x
}









