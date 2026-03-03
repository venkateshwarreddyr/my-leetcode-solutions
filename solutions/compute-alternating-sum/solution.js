// Problem: Compute Alternating Sum
// LeetCode: https://leetcode.com/problems/compute-alternating-sum/
// Language: javascript
// Runtime: 1 ms
// Memory: 55.5 MB
// Submitted: 2025-10-12

/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function (nums) {
	let sumEven = 0;
	let sumOdd = 0;
	nums.forEach((x, i) => {
		if (i % 2 === 0) {
			// even
			sumEven += x;
		} else {
			sumOdd += x;
		}
	});
	let alternatingSum = sumEven - sumOdd;
	return alternatingSum;
};
