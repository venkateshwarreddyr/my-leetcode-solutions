// Problem: 2 Keys Keyboard
// LeetCode: https://leetcode.com/problems/2-keys-keyboard/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.2 MB
// Submitted: 2025-12-07

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
	if (n === 1) return 0;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return i + minSteps(n / i);
		}
	}

	return n;
};
