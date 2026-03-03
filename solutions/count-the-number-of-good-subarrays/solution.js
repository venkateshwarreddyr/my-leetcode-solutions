// Problem: Count the Number of Good Subarrays
// LeetCode: https://leetcode.com/problems/count-the-number-of-good-subarrays/
// Language: javascript
// Runtime: 35 ms
// Memory: 78.7 MB
// Submitted: 2025-11-04

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
    let n = nums.length
    let map = new Map()
    let an = 0
    let left = 0

    let handShakes = 0
    for (let right = 0; right < nums.length; right++) {
        handShakes += map.get(nums[right]) || 0;
        map.set(nums[right], (map.get(nums[right]) ?? 0) + 1)

        while (handShakes >= k) {
            an += (n - right)
            map.set(nums[left], map.get(nums[left]) - 1)
            handShakes -= map.get(nums[left]);
            left++
        }
    }

    return an
};

