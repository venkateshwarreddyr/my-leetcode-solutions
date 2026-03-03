// Problem: Longest Nice Subarray
// LeetCode: https://leetcode.com/problems/longest-nice-subarray/
// Language: javascript
// Runtime: 2 ms
// Memory: 65.5 MB
// Submitted: 2025-10-26

var longestNiceSubarray = function (a) {
	let n = a.length;
	let usedBitmap = 0;
	let max = 0;
	let j = 0;
	for (let i = 0; i < n; i++) {
		for (; j < n && (usedBitmap & a[j]) === 0; j++) {
			usedBitmap |= a[j]; // keep adding no overlap bit elements
		}
		max = Math.max(max, j - i);
		usedBitmap ^= a[i]; // remove current
	}
	return max;
};

