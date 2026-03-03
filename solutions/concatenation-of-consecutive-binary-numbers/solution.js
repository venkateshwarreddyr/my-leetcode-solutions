// Problem: Concatenation of Consecutive Binary Numbers
// LeetCode: https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/
// Language: javascript
// Runtime: 1962 ms
// Memory: 47.7 MB
// Submitted: 2023-07-18

cl = console.log
MOD = 10 ** 9 + 7
/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  let d = 0
  for (let i = 1; i <= n; i++) {
    bits = i.toString(2)
    d = d * (2 ** bits.length) + i
    d %= MOD
  }


  return d;
};


/**
// binary to decimal
// https://www.geeksforgeeks.org/how-to-convert-from-binary-to-decimal/

var concatenatedBinary = function (n) {
  const MOD = 10 ** 9 + 7;
  let d = 0;
  for (let i = 1; i <= n; i++) {
    let bits = i.toString(2);
    for (let b of bits) {
      d = d * 2 + +b;
      d = d % MOD;
    }
  }
  return d;
};
 */
