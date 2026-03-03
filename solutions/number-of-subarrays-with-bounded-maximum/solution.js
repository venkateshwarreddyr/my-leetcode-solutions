// Problem: Number of Subarrays with Bounded Maximum
// LeetCode: https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/
// Language: javascript
// Runtime: 5 ms
// Memory: 63.4 MB
// Submitted: 2025-12-25

var numSubarrayBoundedMax = function (a, low, high) {

    function countSubarrays(target) {
        let total = 0;
        let count = 0;
        for (let e of a) {
            if (e <= target) {
                count += 1;
                total += count;
            } else {
                count = 0;
            }
        }
        return total;
    }

    return countSubarrays(high) - countSubarrays(low - 1);
};

