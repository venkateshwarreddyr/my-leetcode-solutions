// Problem: Hamming Distance
// LeetCode: https://leetcode.com/problems/hamming-distance/
// Language: javascript
// Runtime: 84 ms
// Memory: 38.8 MB
// Submitted: 2021-05-30

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    
//     let diff = 0;
//     while(x!=0 || y !=0){
//         if((x%2) != (y%2)) diff++;

//         x=Math.floor(x/2);
//         y=Math.floor(y/2);
//     }
//     return diff;
    return ((x ^ y).toString(2)).split('').reduce((a,c) => a+Number(c), 0)
};
