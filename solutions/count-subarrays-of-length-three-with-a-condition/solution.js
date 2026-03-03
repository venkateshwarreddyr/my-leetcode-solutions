// Problem: Count Subarrays of Length Three With a Condition
// LeetCode: https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/
// Language: javascript
// Runtime: 1 ms
// Memory: 56.1 MB
// Submitted: 2025-08-06

var countSubarrays = function (nums) {
  let ct = 0
  for (let i = 0; i + 2 < nums.length; i++) {
    let f = nums[i]
    let s = nums[i + 1]
    let t = nums[i + 2]
    if ((f + t) === (s/2)) {
      ct++
    }
  }
  return ct
};

