// Problem: Remove Vowels from a String
// LeetCode: https://leetcode.com/problems/remove-vowels-from-a-string/
// Language: javascript
// Runtime: 56 ms
// Memory: 49.3 MB
// Submitted: 2024-04-27

/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
	let set = new Set('aeiou');
	let an = '';
	for(let c of s) {
		if(!set.has(c)) an+=c
}


	return an;
};

