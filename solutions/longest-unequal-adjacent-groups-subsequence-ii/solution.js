// Problem: Longest Unequal Adjacent Groups Subsequence II
// LeetCode: https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/
// Language: javascript
// Runtime: 23 ms
// Memory: 65.4 MB
// Submitted: 2025-12-24

var getWordsInLongestSubsequence333333 = function (words, groups) {
	function calculateHammingDistance(w1, w2) {
		if (w1.length !== w2.length) return Infinity;
		let count = 0;
		for (let i = 0; i < w1.length; i++) {
			if (w1[i] !== w2[i]) count++;
		}
		return count;
	}

	function canBeAdjacentInSubsequence(words, groups, i, j) {
		const groupsAreDifferent = groups[i] !== groups[j];
		const hammingDistanceIsExactlyOne = calculateHammingDistance(words[i], words[j]) === 1;
		return groupsAreDifferent && hammingDistanceIsExactlyOne;
	}

	const n = words.length;
	const longestSubSeqLenAt = new Array(n).fill(1);
	const prevIndexInPath = new Array(n).fill(-1);
	for (let R = 1; R < n; R++) {
		for (let L = 0; L < R; L++) {
			if (canBeAdjacentInSubsequence(words, groups, L, R)) {
				if (longestSubSeqLenAt[L] + 1 > longestSubSeqLenAt[R]) {
					longestSubSeqLenAt[R] = longestSubSeqLenAt[L] + 1;
					prevIndexInPath[R] = L;
				}
			}
		}
	}

	let longestSubSeqIndexEnd = 0;
	for (let i = 1; i < n; i++) {
		if (longestSubSeqLenAt[i] > longestSubSeqLenAt[longestSubSeqIndexEnd]) {
			longestSubSeqIndexEnd = i;
		}
	}

	const res = [];
	let i = longestSubSeqIndexEnd;
	while (i !== -1) {
		res.push(words[i]);
		i = prevIndexInPath[i];
	}

	return res.reverse();
};

var getWordsInLongestSubsequence = function (words, groups) {
	function generateWildcardPatterns(word) {
		const wildcardPatterns = [];

		for (let i = 0; i < word.length; i++) {
			let p = word.substring(0, i) + '*' + word.substring(i + 1);
			wildcardPatterns.push(p);
		}

		return wildcardPatterns;
	}

	const n = words.length;
	const longestSubSeqLenAt = new Array(n).fill(1);
	const prevIndexInPath = new Array(n).fill(-1);
	const patternToGroupToBestInfo = new Map();

	for (let i = 0; i < n; i++) {
		const w = words[i];
		const g = groups[i];
		const wildcardPatterns = generateWildcardPatterns(w);

		for (const p of wildcardPatterns) {
			if (!patternToGroupToBestInfo.has(p)) continue;

			const thisPatternGroupToBestInfo = patternToGroupToBestInfo.get(p);
			let otherGroupLongestInfo2 = null;
			for (const [g2, info2] of thisPatternGroupToBestInfo.entries()) {
				if (
					g2 !== g &&
					(otherGroupLongestInfo2 === null || info2.longestLength > otherGroupLongestInfo2.longestLength)
				) {
					otherGroupLongestInfo2 = info2;
				}
			}

			if (otherGroupLongestInfo2 !== null) {
				const newLength = otherGroupLongestInfo2.longestLength + 1;

				if (newLength > longestSubSeqLenAt[i]) {
					longestSubSeqLenAt[i] = newLength;
					prevIndexInPath[i] = otherGroupLongestInfo2.longestLengthIndex;
				}
			}
		}

		for (const p of wildcardPatterns) {
			if (!patternToGroupToBestInfo.has(p)) patternToGroupToBestInfo.set(p, new Map());

			const thisPatternGroupToBestInfo = patternToGroupToBestInfo.get(p);
			const existingInfo = thisPatternGroupToBestInfo.get(g);
			if (!existingInfo || longestSubSeqLenAt[i] > existingInfo.longestLength) {
				thisPatternGroupToBestInfo.set(g, {
					longestLength: longestSubSeqLenAt[i],
					longestLengthIndex: i,
				});
			}
		}
	}

	let longestSubSeqIndexEnd = 0;
	for (let i = 1; i < n; i++) {
		if (longestSubSeqLenAt[i] > longestSubSeqLenAt[longestSubSeqIndexEnd]) {
			longestSubSeqIndexEnd = i;
		}
	}

	const res = [];
	let i = longestSubSeqIndexEnd;
	while (i !== -1) {
		res.push(words[i]);
		i = prevIndexInPath[i];
	}

	return res.reverse();
};

