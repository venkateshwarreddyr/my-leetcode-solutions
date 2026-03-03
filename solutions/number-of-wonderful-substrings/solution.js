// Problem: Number of Wonderful Substrings
// LeetCode: https://leetcode.com/problems/number-of-wonderful-substrings/
// Language: javascript
// Runtime: 142 ms
// Memory: 64.4 MB
// Submitted: 2025-10-23

var wonderfulSubstrings = function (s) {
	let prefixParityBitmap = 0; // empty string

	let prefixParityBitmapFreq = {};
	prefixParityBitmapFreq[prefixParityBitmap] = 1; // empty string occurred one time

	let prevBitPositionSet = new Set();
	let count = 0;
	for (let ch of s) {
		let bitPosition = ch.charCodeAt(0) - 'a'.charCodeAt(0); // 0 to 9
		prefixParityBitmap = prefixParityBitmap ^ (1 << bitPosition); // 0 or 1  for that bit/char

		count += prefixParityBitmapFreq[prefixParityBitmap] ?? 0; // PART1 - 0 odd numbers for substrings of same pb
		prefixParityBitmapFreq[prefixParityBitmap] = (prefixParityBitmapFreq[prefixParityBitmap] ?? 0) + 1; // increment pbfreq

		prevBitPositionSet.add(bitPosition);

		// PART2 - 1 odd number char
		for (let bitPosition2 of prevBitPositionSet) {
			let prefixParityBitmapFlipped = prefixParityBitmap ^ (1 << bitPosition2); // 0 or 1  for that bit/char
			count += prefixParityBitmapFreq[prefixParityBitmapFlipped] ?? 0; // PART2 - 1 odd number char
		}
	}

	return count;
};

