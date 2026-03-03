// Problem: Maximum Product of Three Numbers
// LeetCode: https://leetcode.com/problems/maximum-product-of-three-numbers/
// Language: javascript
// Runtime: 116 ms
// Memory: 45.9 MB
// Submitted: 2023-04-05

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums = nums.sort((a,b) => b-a);

    let n = nums.length;
    let y = nums[n-2]
    let z = nums[n-1]
    let a = nums[0]
    let b = nums[1]
    let c = nums[2]

    return Math.max(a*y*z, a*b*c)
};
