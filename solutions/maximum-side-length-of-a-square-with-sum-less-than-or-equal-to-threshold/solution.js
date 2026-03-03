// Problem: Maximum Side Length of a Square with Sum Less than or Equal to Threshold
// LeetCode: https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/
// Language: javascript
// Runtime: 817 ms
// Memory: 63.8 MB
// Submitted: 2026-01-19

function getPrefixSumMatrix(g) {
	const m = g.length;
	const n = g[0].length;
	const prefixSum = Array.from({ length: m }, () => Array(n));

	for (let R = 0; R < m; R++) {
		for (let C = 0; C < n; C++) {
			let leftRectSum = prefixSum[R][C - 1] ?? 0;
			let topRectSum = prefixSum[R - 1]?.[C] ?? 0;
			let commonTopLeftRectSum = prefixSum[R - 1]?.[C - 1] ?? 0;

			prefixSum[R][C] = leftRectSum + topRectSum - commonTopLeftRectSum + g[R][C];
		}
	}

	return prefixSum;
}

var maxSideLength = function (g, t) {
	const prefixSum = getPrefixSumMatrix(g);
	const m = g.length;
	const n = g[0].length;
	let maxSideLen = 0;

	for (let R = 0; R < m; R++) {
		for (let C = 0; C < n; C++) {
			for (let sideLen = Math.min(m - R, n - C) - 1; sideLen >= 0; sideLen--) {
				const R2 = R + sideLen;
				const C2 = C + sideLen;

				let fullRectSum = prefixSum[R2][C2] ?? 0;
				let leftRectSum = prefixSum[R2]?.[C - 1] ?? 0;
				let topRectSum = prefixSum[R - 1]?.[C2] ?? 0;
				let commonTopLeftRectSum = prefixSum[R - 1]?.[C - 1] ?? 0;

				const sum = fullRectSum - leftRectSum - topRectSum + commonTopLeftRectSum;

				if (sum <= t) {
					maxSideLen = Math.max(maxSideLen, R2 - R + 1);
				}
			}
		}
	}

	return maxSideLen;
};

