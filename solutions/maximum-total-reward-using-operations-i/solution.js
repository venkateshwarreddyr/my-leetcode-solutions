// Problem: Maximum Total Reward Using Operations I
// LeetCode: https://leetcode.com/problems/maximum-total-reward-using-operations-i/
// Language: javascript
// Runtime: 2405 ms
// Memory: 167.7 MB
// Submitted: 2024-06-09

/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function(rewardValues) {
    let n = rewardValues.length
    rewardValues.sort((a, b) => a - b);
    let max_sum = 0
    let mat = new Array(n)
    for(let i=0;i<n;i++) {
        mat[i] = {}
    }
    function fn(i, sum){
        if(i === n) {
            return 0;
        }
        
        if(mat[i][sum] !== undefined) return mat[i][sum]
        
        let max = 0
        if(sum < rewardValues[i]) {
            max = Math.max(max,rewardValues[i] + fn(i+1, sum+rewardValues[i]))
        }
        
         max = Math.max(max, fn(i+1, sum))
        
        return mat[i][sum] = max
    }
    
    
    return fn(0, 0)
};
/**
[1,2,3,4,6]
*/
