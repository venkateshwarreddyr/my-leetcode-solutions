// Problem: Beautiful Arrangement II
// LeetCode: https://leetcode.com/problems/beautiful-arrangement-ii/
// Language: javascript
// Runtime: 1 ms
// Memory: 55.8 MB
// Submitted: 2025-11-29

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
	const result = [];
	let left = 1,
		right = k + 1;

	while (left <= right) {
		result.push(left++);
		if (left <= right) result.push(right--);
	}

	for (let i = k + 2; i <= n; i++) result.push(i);

	return result;
};
