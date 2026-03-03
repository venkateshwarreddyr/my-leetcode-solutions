// Problem: Compute Decimal Representation
// LeetCode: https://leetcode.com/problems/compute-decimal-representation/
// Language: javascript
// Runtime: 4 ms
// Memory: 57.9 MB
// Submitted: 2025-10-12

/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function (n) {
	let r = []; // result
	let multipleFactor = 1;
	while (n > 0) {
		let reminderLastDigit = n % 10;
		n = Math.trunc(n / 10);
		if (reminderLastDigit > 0) {
			r.push(reminderLastDigit * multipleFactor);
		}
		multipleFactor *= 10;
	}
	return r.reverse();
};
