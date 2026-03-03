// Problem: Longest Consecutive Sequence
// LeetCode: https://leetcode.com/problems/longest-consecutive-sequence/
// Language: javascript
// Runtime: 296 ms
// Memory: 83.3 MB
// Submitted: 2023-05-19

cl = console.log
var longestConsecutive = function (nums) {
  let n = nums.length;
  if (n === 0) return 0
  let g = [...new Array(n)].map((_, i) => i);

  const find = (a) => {
    return a === g[a] ? a : find(g[a]);
  };

  const union = (a, b) => {
    let u = find(a);
    let v = find(b);

    if (u > v) {
      g[u] = v;
    } else if (u < v) {
      g[v] = u;
    }
  };

  let parsed = {};

  let i = 0
  for (let num of nums) {
    if (parsed[num] !== undefined) continue;
    parsed[num] = i;
    if (parsed[num - 1] !== undefined) {
      union(parsed[num - 1], i)
    }
    if (parsed[num + 1] !== undefined) {
      union(parsed[num + 1], i)
    }
    i++;
  }

  let obj = {};

  for (let e of g) {
    e = find(e)
    obj[e] = (obj[e] || 0) + 1
  }
  let max = -Infinity;
  for (let v of Object.values(obj)) {
    max = Math.max(v, max)
  }

  return max;

};
