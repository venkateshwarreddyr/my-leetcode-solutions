// Problem: Jewels and Stones
// LeetCode: https://leetcode.com/problems/jewels-and-stones/
// Language: javascript
// Runtime: 68 ms
// Memory: 39.9 MB
// Submitted: 2021-07-17

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let counter = 0;
    for(let i = 0;i<stones.length;i++){
        jewels.includes(stones[i]) && counter++
    }
    return counter;
};
