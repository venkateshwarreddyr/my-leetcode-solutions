// Problem: Number of Ways to Form a Target String Given a Dictionary
// LeetCode: https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/
// Language: javascript
// Runtime: 237 ms
// Memory: 93.9 MB
// Submitted: 2026-02-13

var numWays = function (words, target) {
	const n = words[0].length; // All words are same length
	const m = target.length;
	const MOD = 1e9 + 7;

	// freq[i][char] = currCharCount
	const freq = Array.from({ length: n }, () => new Array(26).fill(0));

	for (let i = 0; i < n; i++) {
		for (const word of words) {
			const char = word[i].charCodeAt() - 'a'.charCodeAt();
			freq[i][char]++;
		}
	}

	target = target.split('').map(ch => ch.charCodeAt() - 'a'.charCodeAt());

	const memo = Array.from({ length: n }, () => new Array(m));

	const dfs = (i, j) => {
		if (j === m) return 1; // target built
		if (i === n) return 0; // ran out of words - target could not be built
		if (memo[i][j] !== undefined) return memo[i][j];

		// don't take i
		let ways = dfs(i + 1, j);

		// take i
		const targetChar = target[j];
		const currCharCount = freq[i][targetChar];
		//       currCharCount of char  * ways to finish rest of target
		ways += (currCharCount * dfs(i + 1, j + 1)) % MOD;

		return (memo[i][j] = ways % MOD);
	};

	return dfs(0, 0);
};

