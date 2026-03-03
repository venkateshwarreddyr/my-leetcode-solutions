// Problem: Substrings of Size Three with Distinct Characters
// LeetCode: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
// Language: javascript
// Runtime: 76 ms
// Memory: 41.4 MB
// Submitted: 2021-05-29

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let counter = 0;
    for(let i = 0; i< s.length-2;i++){
        if(new Set(s.substring(i,i+3)).size===3)
            counter++;
    }
    return counter;
};
