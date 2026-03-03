// Problem: Valid Triangle Number
// LeetCode: https://leetcode.com/problems/valid-triangle-number/
// Language: javascript
// Runtime: 26 ms
// Memory: 57.4 MB
// Submitted: 2025-12-05

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    nums.sort((a, b) => a - b);
    let count = 0;

    for (let k = nums.length - 1; k >= 2; k--) {
        let left = 0,
            right = k - 1;
        while (left < right) {
            if (nums[left] + nums[right] > nums[k]) {
                count += (right - left);
                right--;
            } else {
                left++;
            }
        }
    }

    return count;
};
/**
a + b > c
a - c > - b
c - a < b

 */
