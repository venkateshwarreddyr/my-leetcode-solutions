// Problem: Minimum Impossible OR
// LeetCode: https://leetcode.com/problems/minimum-impossible-or/
// Language: javascript
// Runtime: 107 ms
// Memory: 66.5 MB
// Submitted: 2023-07-18

/**
 * @param {number[]} nums
 * @return {number}
 */
var minImpossibleOR = function (a) {
    let set = new Set(a);

    let p = 1
    while (set.has(p)) {
        p *= 2
    }

    return p
};




























/**
var minImpossibleOR = function (a) {
  let set = new Set(a);

  let p = 1
  while (set.has(p)) {
    p *= 2
  }

  return p
};
 */
