// Problem: Count Ways to Group Overlapping Ranges
// LeetCode: https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/
// Language: javascript
// Runtime: 142 ms
// Memory: 67.4 MB
// Submitted: 2023-03-04

/**
 * @param {number[][]} ranges
 * @return {number}
 */
  let MOD = BigInt(10**9 + 7)

var countWays = function(ranges) {
    ranges = ranges.sort((a,b) => a[0]-b[0]);
//     let arr = new Array(n).fill(0);
    let n = BigInt(1); 
    let max = ranges[0][1];
    for(let i=1;i<ranges.length;i++){
        max = Math.max(ranges[i-1][1], max)
        if(max<ranges[i][0]) n++
    }

    
    return (2n ** n ) % MOD
    
};
