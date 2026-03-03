// Problem: Equal Score Substrings
// LeetCode: https://leetcode.com/problems/equal-score-substrings/
// Language: javascript
// Runtime: 0 ms
// Memory: 58.3 MB
// Submitted: 2025-10-12

const charCode = ch => ch.charCodeAt(0);
const position = ch => charCode(ch) - charCode('a') + 1;

var scoreBalance = function (s) {
	let cummulativeScores = [];
	let totalScore = 0;

	for (let ch of s) {
		let pos = position(ch);
		totalScore += pos;
		cummulativeScores.push(totalScore);
	}

	return cummulativeScores.includes(totalScore / 2);
};

