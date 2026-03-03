// Problem: Constrained Subsequence Sum
// LeetCode: https://leetcode.com/problems/constrained-subsequence-sum/
// Language: javascript
// Runtime: 324 ms
// Memory: 100.7 MB
// Submitted: 2026-01-17

var constrainedSubsetSum = function (nums, k) {
	const n = nums.length;
	const dp = [...nums]; // each element might be max sum (eg: all -ve)
	const ind = new PriorityQueue((a, b) => b[0] - a[0]);

	for (let i = 0; i < n; i++) {
		// on left, remove out of window [i-k, i-1] indexes
		while (!ind.isEmpty() && ind.front()[1] < i - k) {
			ind.dequeue();
		}
		// largest is in front
		if (!ind.isEmpty() && ind.front()[0] > 0) {
			dp[i] += ind.front()[0];
		}
		ind.enqueue([dp[i], i]);
	}

	return Math.max(...dp);
};

var constrainedSubsetSum22222 = function (nums, k) {
	const n = nums.length;
	const dp = [...nums]; // each element might be max sum (eg: all -ve)
	const ind = []; // dec DP Indexes

	for (let i = 0; i < n; i++) {
		// on left, remove out of window [i-k, i-1] indexes
		while (ind.length && ind[0] < i - k) {
			ind.shift();
		}
		// largest is in front - deque is decreasing dp values
		if (ind.length && dp[ind[0]] > 0) {
			dp[i] += dp[ind[0]];
		}
		// on right, remove smaller than current => decreasing dp values
		while (ind.length && dp[ind.at(-1)] <= dp[i]) {
			ind.pop();
		}
		// add curr
		ind.push(i);
	}

	return Math.max(...dp);
};

