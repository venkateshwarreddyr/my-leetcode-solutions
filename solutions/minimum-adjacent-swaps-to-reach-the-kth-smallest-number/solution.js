// Problem: Minimum Adjacent Swaps to Reach the Kth Smallest Number
// LeetCode: https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/
// Language: javascript
// Runtime: 222 ms
// Memory: 63.1 MB
// Submitted: 2025-10-28

function next_permutation(a) {
	let n = a.length;
	let i;
	for (i = n - 2; i >= 0; i--) {
		if (a[i] < a[i + 1]) {
			break;
		}
	}
	if (i >= 0) {
		for (let j = n - 1; j > i; j--) {
			if (a[i] < a[j]) {
				[a[j], a[i]] = [a[i], a[j]];
				break;
			}
		}
	}
	return [...a.slice(0, i + 1), ...a.slice(i + 1).sort()];
}

var getMinSwaps = function (s, k) {
	a = [...s];
	let p = [...a];
	while (k--) {
		p = next_permutation(p);
	}

	let swaps = 0;
	for (let i = 0; i < p.length; i++) {
		if (p[i] !== a[i]) {
			let j = a.indexOf(p[i], i);
			for (; j > i; j--) {
				[a[j], a[j - 1]] = [a[j - 1], a[j]];
				swaps++;
			}
		}
	}
	return swaps;
};

