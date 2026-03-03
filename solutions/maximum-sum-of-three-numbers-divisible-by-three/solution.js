// Problem: Maximum Sum of Three Numbers Divisible by Three
// LeetCode: https://leetcode.com/problems/maximum-sum-of-three-numbers-divisible-by-three/
// Language: javascript
// Runtime: 296 ms
// Memory: 96.3 MB
// Submitted: 2026-01-10

var maximumSum = function (a) {
	let b = [...a];
	a = a.map(e => e % 3); // 0 1 2

	let f = { 0: [], 1: [], 2: [] };
	let i = 0;
	for (let e of a) {
		f[e].push(b[i]);
		i++;
	}

	f[0].sort((a, b) => b - a);
	f[1].sort((a, b) => b - a);
	f[2].sort((a, b) => b - a);

	let [a0, b0, c0] = f[0];
	let [a1, b1, c1] = f[1];
	let [a2, b2, c2] = f[2];

	let max = 0;
	// 0 + 0 + 0 => %3
	if (c0 !== undefined) max = Math.max(max, a0 + b0 + c0);
	// 1 + 1 + 1 => %3
	if (c1 !== undefined) max = Math.max(max, a1 + b1 + c1);
	// 2 + 2 + 2 => %3
	if (c2 !== undefined) max = Math.max(max, a2 + b2 + c2);
	// 0 + 1 + 2 => %3
	if (a0 !== undefined) if (a1 !== undefined) if (a2 !== undefined) max = Math.max(max, a0 + a1 + a2);

	return max;
};

