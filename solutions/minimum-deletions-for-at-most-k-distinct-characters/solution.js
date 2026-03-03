// Problem: Minimum Deletions for At Most K Distinct Characters
// LeetCode: https://leetcode.com/problems/minimum-deletions-for-at-most-k-distinct-characters/
// Language: javascript
// Runtime: 24 ms
// Memory: 59.1 MB
// Submitted: 2025-10-12

var minDeletion = function (s, k) {
	let o = {};
	for (let ch of s) {
		o[ch] = (o[ch] || 0) + 1;
	}

	let vas = [...Object.values(o)].sort((a, b) => b - a);
	let newVas = vas.slice(k);
    console.log(vas, newVas)
	return newVas.reduce((s, x) => s + x, 0);
};
