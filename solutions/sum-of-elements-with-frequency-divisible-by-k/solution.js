// Problem: Sum of Elements With Frequency Divisible by K
// LeetCode: https://leetcode.com/problems/sum-of-elements-with-frequency-divisible-by-k/
// Language: javascript
// Runtime: 5 ms
// Memory: 58.7 MB
// Submitted: 2025-10-22

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function (a, k) {
	let o = {};
	for (let x of a) {
		o[x] = o[x] || 0;
		o[x]++;
	}

	let sumOfEles = 0;
	let keyVals = [...Object.entries(o)];
	for (let [x, count] of keyVals) {
		if (count % k === 0) {
			sumOfEles += x * count;
		}
	}
	return sumOfEles;
};

