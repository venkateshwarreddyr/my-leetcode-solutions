// Problem: Number of Sub-arrays With Odd Sum
// LeetCode: https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/
// Language: javascript
// Runtime: 5 ms
// Memory: 65.7 MB
// Submitted: 2026-01-17

var numOfSubarrays = function (arr) {
    const MOD = 1e9 + 7;
    let prefixSum = 0;
    let oddPrefixSumCount = 0;
    let evenPrefixSumCount = 1; // since 0 is even prefix sum
    let total = 0; // total Odd Subarrays

    for (const num of arr) {
        prefixSum += num;

        if (prefixSum % 2 === 0) {
            // even-odd=odd - remove odd prefix sum, from this even prefix sum => odd sum subarray
            total = (total + oddPrefixSumCount) % MOD; // more ways
            evenPrefixSumCount++;
        } else {
            // odd-even=odd - remove even prefix sum, from this odd prefix sum => odd sum subarray
            total = (total + evenPrefixSumCount) % MOD;
            oddPrefixSumCount++;
        }
    }

    return total;
};

