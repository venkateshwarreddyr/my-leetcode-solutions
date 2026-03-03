// Problem: Single-Row Keyboard
// LeetCode: https://leetcode.com/problems/single-row-keyboard/
// Language: javascript
// Runtime: 63 ms
// Memory: 49.1 MB
// Submitted: 2024-04-27

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
  	let ob = {}
	let i = 0
	for(let c of keyboard) {
		ob[c] = i
		i++
}


let curr = 0
let an = 0


for(i=0;i<word.length;i++) {
	an+=(Math.abs(ob[word[i]] - curr))
	curr = ob[word[i]]
}


return an
};

