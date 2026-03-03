// Problem: Kids With the Greatest Number of Candies
// LeetCode: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
// Language: javascript
// Runtime: 76 ms
// Memory: 39.2 MB
// Submitted: 2021-05-30

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxx= Math.max(...candies);
    let newCandies = []
    for(let i = 0; i< candies.length; i++){
        newCandies.push(candies[i] + extraCandies >= maxx);
    }
    return newCandies;
};
