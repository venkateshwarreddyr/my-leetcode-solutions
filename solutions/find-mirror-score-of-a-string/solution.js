// Problem: Find Mirror Score of a String
// LeetCode: https://leetcode.com/problems/find-mirror-score-of-a-string/
// Language: javascript
// Runtime: 12 ms
// Memory: 58.8 MB
// Submitted: 2025-12-27

var calculateScore = function (s) {
	const closestMirrorIndexes = Array.from({ length: 26 }, () => []);
	let score = 0;

	for (let i = 0; i < s.length; i++) {
		const chIndex = s[i].charCodeAt() - 97;
		const chMirrorIndex = 25 - chIndex;

		if (closestMirrorIndexes[chMirrorIndex].length > 0) {
			const j = closestMirrorIndexes[chMirrorIndex].pop();
			score += i - j;
		} else {
			closestMirrorIndexes[chIndex].push(i);
		}
	}

	return score;
};

