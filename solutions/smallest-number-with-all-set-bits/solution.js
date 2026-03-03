// Problem: Smallest Number With All Set Bits
// LeetCode: https://leetcode.com/problems/smallest-number-with-all-set-bits/
// Language: javascript
// Runtime: 0 ms
// Memory: 56 MB
// Submitted: 2025-10-29

var smallestNumber = function (n) {
  // for (let x = n; ; x++) {
  //   if (x === 2 ** y - 1) return x
  // }

  let p = Math.trunc(Math.log2(n))
  let twoPowers = [2 ** p, 2 ** (p + 1)]
  let all1sNumbers = twoPowers.map(x => x - 1)
  if (all1sNumbers[0] >= n) return all1sNumbers[0]
  return all1sNumbers[1]
};

