// Problem: Count Partitions With Max-Min Difference at Most K
// LeetCode: https://leetcode.com/problems/count-partitions-with-max-min-difference-at-most-k/
// Language: javascript
// Runtime: 330 ms
// Memory: 81.8 MB
// Submitted: 2025-12-06

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPartitions = function (nums, k) {
    const n = nums.length;
    const MOD = 1_000_000_007;

    let minQueue = [];
    let maxQueue = [];

    let dp = Array(n + 1).fill(0);
    let prefixSum = Array(n + 1).fill(0);

    dp[0] = 1;
    prefixSum[0] = 1;

    let left = 0;

    for (let right = 0; right < n; right++) {

        while (minQueue.length && minQueue.at(-1) > nums[right]) {
            minQueue.pop();
        }
        minQueue.push(nums[right]);

        while (maxQueue.length && maxQueue.at(-1) < nums[right]) {
            maxQueue.pop();
        }
        maxQueue.push(nums[right]);

        while (maxQueue[0] - minQueue[0] > k) {
            if (minQueue[0] === nums[left]) minQueue.shift();
            if (maxQueue[0] === nums[left]) maxQueue.shift();
            left++;
        }

        dp[right + 1] = (prefixSum[right] - (prefixSum[left - 1] ?? 0) + MOD) % MOD;
        prefixSum[right + 1] = (prefixSum[right] + dp[right + 1]);

    }

    return dp[n];
};

