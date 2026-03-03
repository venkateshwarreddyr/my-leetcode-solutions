// Problem: H-Index II
// LeetCode: https://leetcode.com/problems/h-index-ii/
// Language: javascript
// Runtime: 16 ms
// Memory: 57.9 MB
// Submitted: 2026-01-02

var hIndex = function (numOfCitations) {
	const n = numOfCitations.length;
	let lo = 0;
	let hi = n;

	while (lo < hi) {
		const mid = (lo + hi + 1) >> 1;
		let count = numOfCitations.reduce((sum, e) => sum + (e >= mid), 0);
		if (count >= mid) {
			lo = mid;
		} else {
			hi = mid - 1;
		}
	}

	return lo;
};

