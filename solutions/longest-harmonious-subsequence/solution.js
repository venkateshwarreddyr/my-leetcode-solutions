// Problem: Longest Harmonious Subsequence
// LeetCode: https://leetcode.com/problems/longest-harmonious-subsequence/
// Language: javascript
// Runtime: 35 ms
// Memory: 67.9 MB
// Submitted: 2025-06-30

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let obj = {};

    for(let num of nums){
        obj[num] = (obj[num] || 0) + 1;
    }

    let max = 0;
    for(let key of Object.keys(obj)){
        key = Number(key)
        if(obj[key+1]){
            let v = obj[key] + obj[key+1];

            if(v>max){
                max = v;
            }
        }
    }

    return max
};
