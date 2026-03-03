// Problem: Two Sum
// LeetCode: https://leetcode.com/problems/two-sum/
// Language: javascript
// Runtime: 4 ms
// Memory: 57.4 MB
// Submitted: 2025-06-27

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(input, target) {
    	const indices = new Map();
		for(let i = 0; i< input.length; i++){
			indices.set(input[i] , i);
		}
 
		for(let j=0; j<input.length; j++){
			const diffTarget = target - input[j];
			const isSameIndex = indices.get(diffTarget) == j;
			if(indices.has(diffTarget) && !isSameIndex){
				return [ j ,indices.get(diffTarget)]
			}
		}
		return []
};
