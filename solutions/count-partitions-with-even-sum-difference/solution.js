// Problem: Count Partitions with Even Sum Difference
// LeetCode: https://leetcode.com/problems/count-partitions-with-even-sum-difference/
// Language: javascript
// Runtime: 0 ms
// Memory: 57.7 MB
// Submitted: 2025-12-05

/**
 * @param {number[]} nums
 * @return {number}
 */

var countPartitions = function (a) {
	let leftSum = 0;
	let rightSum = 0;
	let count = 0;
	for (const num of a) rightSum += num;
	for (let i = 0; i < a.length - 1; i++) {
		leftSum += a[i];
		rightSum -= a[i];
		const diff = leftSum - rightSum;
		if (diff % 2 === 0) count++;
	}
	return count;
};

