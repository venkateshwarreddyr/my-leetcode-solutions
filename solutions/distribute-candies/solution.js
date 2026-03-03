// Problem: Distribute Candies
// LeetCode: https://leetcode.com/problems/distribute-candies/
// Language: javascript
// Runtime: 283 ms
// Memory: 62.3 MB
// Submitted: 2023-05-08

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let obj = {}
    let maxCandyPossible = candyType.length/2
    for(let candy of candyType){
        obj[candy] = (obj[candy] || 0) + 1
    }

    return maxCandyPossible <= Object.keys(obj).length ? maxCandyPossible : Object.keys(obj).length;
};
