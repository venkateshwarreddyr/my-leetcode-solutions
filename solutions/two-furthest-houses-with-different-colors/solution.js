// Problem: Two Furthest Houses With Different Colors
// LeetCode: https://leetcode.com/problems/two-furthest-houses-with-different-colors/
// Language: javascript
// Runtime: 76 ms
// Memory: 39.1 MB
// Submitted: 2021-11-21

/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
  let maxx = -100;
    for (let i=0; i< colors.length;i++){
        for(let j=i+1;j<colors.length; j++){
            if(colors[i]!=colors[j] && (j-i) > maxx) {
                maxx = j-i
            }
        }
    }
    return maxx;
};
