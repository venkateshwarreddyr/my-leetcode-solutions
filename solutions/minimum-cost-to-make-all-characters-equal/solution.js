// Problem: Minimum Cost to Make All Characters Equal
// LeetCode: https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/
// Language: javascript
// Runtime: 298 ms
// Memory: 60.4 MB
// Submitted: 2023-05-28

cl = console.log;
var minimumCost = function (s) {
  let n = s.length;

  let s1 = s
    .slice(0, n / 2)
    .split("")
    .map((e) => Number(e));
  let s2 = s
    .slice(n / 2, n)
    .split("")
    .map((e) => Number(e));
  // cl(s1,s2)

  let flipped = false;
  let an = 0;
  for (let i = s1.length - 1; i > -1; i--) {
    if (flipped ? s1[i] === 1 : s1[i] === 0) {
      flipped = !flipped;

      an += i + 1;
    }
  }
  // cl()
  flipped = false;
  for (let i = 0; i < s2.length; i++) {
    if (flipped ? s2[i] === 1 : s2[i] === 0) {
      flipped = !flipped;
      an += s2.length - i;
      // cl({s2}, s2.length-i)
    }
  }

  flipped = true;
  let an2 = 0;
  for (let i = s1.length - 1; i > -1; i--) {
    if (flipped ? s1[i] === 1 : s1[i] === 0) {
      flipped = !flipped;

      an2 += i + 1;
    }
  }
  // cl()
  flipped = true;
  for (let i = 0; i < s2.length; i++) {
    if (flipped ? s2[i] === 1 : s2[i] === 0) {
      flipped = !flipped;
      an2 += s2.length - i;
      // cl({s2}, s2.length-i)
    }
  }
  cl({an, an2})
  return Math.min(an, an2);
};
