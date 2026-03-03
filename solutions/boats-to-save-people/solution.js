// Problem: Boats to Save People
// LeetCode: https://leetcode.com/problems/boats-to-save-people/
// Language: javascript
// Runtime: 72 ms
// Memory: 63.1 MB
// Submitted: 2025-11-28

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
 	people.sort((a, b) => a - b);
	let left = 0,
		right = people.length - 1,
		boats = 0;

	while (left <= right) {
		if (people[left] + people[right] <= limit) left++;
		right--;
		boats++;
	}

	return boats;
};
