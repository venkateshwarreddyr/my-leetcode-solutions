// Problem: Maximum Subarray With Equal Products
// LeetCode: https://leetcode.com/problems/maximum-subarray-with-equal-products/
// Language: javascript
// Runtime: 7 ms
// Memory: 62.6 MB
// Submitted: 2025-10-12

var maxLength = function (nums) {
    function gcd(nums, b) {
        while (b !== 0) {
            [nums, b] = [b, nums % b];
        }
        return nums;
    }
    function lcm(nums, b) {
        return (nums * b) / gcd(nums, b);
    }

    const n = nums.length;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        let prod = 1;
        let g = nums[i];
        let l = nums[i];
        for (let j = i; j < n; j++) {
            prod *= nums[j];
            g = gcd(g, nums[j]);
            l = lcm(l, nums[j]);

            if (prod === g * l) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }

    return maxLen;
};
