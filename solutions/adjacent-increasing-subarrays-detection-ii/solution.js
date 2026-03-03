// Problem: Adjacent Increasing Subarrays Detection II
// LeetCode: https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/
// Language: javascript
// Runtime: 138 ms
// Memory: 87.3 MB
// Submitted: 2025-12-27

var maxIncreasingSubarrays = function (nums) {
	const n = nums.length;
	const incSubarrayLenEndingAt = new Array(n);
	const incSubarrayLenStartingAt = new Array(n);

	let lSum = 0;
	let rSum = 0;
	for (let i = 0, j = n - 1; i < n; i++, j--) {
		lSum += nums[i - 1] < nums[i] ? 1 : -lSum + 1;
		incSubarrayLenEndingAt[i] = lSum;
		rSum += nums[j] < nums[j + 1] ? 1 : -rSum + 1;
		incSubarrayLenStartingAt[j] = rSum;
	}

	let ans = 0;
	for (let i = 0; i < n; i++) {
		ans = Math.max(
			ans,
			// max possible length 2 increasing subarrays
			Math.min(
				incSubarrayLenEndingAt[i], //
				incSubarrayLenStartingAt[i + 1] ?? 0,
			),
		);
	}

	return ans;
};

