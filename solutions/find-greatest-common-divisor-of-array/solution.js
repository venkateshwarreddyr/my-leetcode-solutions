// Problem: Find Greatest Common Divisor of Array
// LeetCode: https://leetcode.com/problems/find-greatest-common-divisor-of-array/
// Language: javascript
// Runtime: 107 ms
// Memory: 40.1 MB
// Submitted: 2021-08-22

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    nums = nums.sort((a,b) => a-b);
    gcd = (a, b) => {
    if (!b) {
    return a;
  }

  return gcd(b, a % b);

    }
    return gcd(nums[0], nums[nums.length-1])
};
