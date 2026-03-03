// Problem: Maximum Split of Positive Even Integers
// LeetCode: https://leetcode.com/problems/maximum-split-of-positive-even-integers/
// Language: javascript
// Runtime: 18 ms
// Memory: 80.9 MB
// Submitted: 2025-12-07

/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function (finalSum) {
	if (finalSum % 2 !== 0) return [];
	const result = [];
	let num = 2;

	while (finalSum >= num) {
		result.push(num);
		finalSum -= num;
		num += 2;
	}

	if (finalSum > 0) result[result.length - 1] += finalSum;
	return result;
};

/**
28
2 6 8 12

 */
