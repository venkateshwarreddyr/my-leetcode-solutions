// Problem: Longest Alternating Subarray
// LeetCode: https://leetcode.com/problems/longest-alternating-subarray/
// Language: javascript
// Runtime: 117 ms
// Memory: 46.2 MB
// Submitted: 2023-07-08

cl = console.log
var alternatingSubarray = function (a) {
  let n = a.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    let cc = 1;
    let start = 1;
    for (let j = i + 1; j < n; j++) {
      if (a[j] - a[j - 1] === start) {
        start = start > 0 ? -1 : 1;
        cc++;
      } else {
        break;
      }
    }
    max = Math.max(max, cc);

    // start = -1;
    // cc = 1;
    // for (let j = i + 1; j < n; j++) {
    //   if (a[j] - a[j - 1] === start) {
    //       cl({j}, "2nd")
    //     start = start > 0 ? -1 : 1;
    //     cc++;
    //   } else {
    //     break;
    //   }
    // }
    // max = Math.max(max, cc);
  }

  return max === 1 ? -1 : max;
};
