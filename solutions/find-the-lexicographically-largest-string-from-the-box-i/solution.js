// Problem: Find the Lexicographically Largest String From the Box I
// LeetCode: https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-i/
// Language: javascript
// Runtime: 5 ms
// Memory: 56.8 MB
// Submitted: 2026-01-07

function answerString(word, numFriends) {
	const n = word.length;

	if (numFriends === 1) return word;

	const othersFriendsNeed1Char = numFriends - 1;
	const maxPossibleSliceLength = n - othersFriendsNeed1Char;
	let largestString = '';

	for (let i = 0; i < n; i++) {
		const subStr = word.substring(i, i + maxPossibleSliceLength);
		if (subStr > largestString) largestString = subStr;
	}

	return largestString;
}

