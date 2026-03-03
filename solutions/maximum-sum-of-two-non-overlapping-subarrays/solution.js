// Problem: Maximum Sum of Two Non-Overlapping Subarrays
// LeetCode: https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/
// Language: javascript
// Runtime: 73 ms
// Memory: 42.6 MB
// Submitted: 2023-11-10

/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function (nums, len1, len2) {
    let n = nums.length
    function getPrefixArray(a) {
        let prefixSum = new Array(a.length)
        let sum = 0
        for (let i = 0; i < a.length; i++) {
            sum += a[i]
            prefixSum[i] = sum
        }

        return prefixSum
    }

    let prefixSum = getPrefixArray(nums)

    let max = 0;
    let count = 2;
    while (count--) {
        for (let i = 0; i + len1 <= n; i++) {
            let sum1 = prefixSum[i + len1 - 1] - (prefixSum[i - 1] || 0);
            for (let j = i + len1; j + len2 <= n; j++) {
                let sum2 = prefixSum[j + len2 - 1] - (prefixSum[j - 1]);
                max = Math.max(max, sum1 + sum2);
            }
        }
        [len2, len1] = [len1, len2];
    }
    return max;
};
