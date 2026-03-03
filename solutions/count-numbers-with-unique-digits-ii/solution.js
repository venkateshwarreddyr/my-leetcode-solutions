// Problem: Count Numbers With Unique Digits II
// LeetCode: https://leetcode.com/problems/count-numbers-with-unique-digits-ii/
// Language: javascript
// Runtime: 97 ms
// Memory: 55.1 MB
// Submitted: 2024-04-27

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var numberCount = function(a, b) {
	let an = 0
  	for(let i=a;i<=b;i++) {
		let set = new Set(i.toString())
		if(set.size === i.toString().length) {
			an++	
        }
        }


        return an;
};

