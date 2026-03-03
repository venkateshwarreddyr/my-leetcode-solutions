// Problem: Smallest Subarrays With Maximum Bitwise OR
// LeetCode: https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/
// Language: javascript
// Runtime: 45 ms
// Memory: 74.4 MB
// Submitted: 2025-11-24

var smallestSubarrays = function (nums) {
    const n = nums.length;
    const last = Array(32).fill(-1);
    const result = Array(n).fill(1);

    for (let i = n - 1; i >= 0; i--) {
        let maxReach = i
        for (let bit = 0; bit < 32; bit++) {
            if ((nums[i] & (1 << bit))) {
                last[bit] = i
            }
            maxReach = Math.max(maxReach, last[bit])

        }


        result[i] = maxReach - i + 1

    }

    return result
};
