// Problem: Minimum Cost of Buying Candies With Discount
// LeetCode: https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/
// Language: javascript
// Runtime: 156 ms
// Memory: 43.9 MB
// Submitted: 2022-01-22

/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost = cost.sort((a,b) => b-a);
    let total = 0;
    console.log(cost)
    for(let i=0;i<cost.length;i++){
        if(i%3==2){
        // if([2,5,8,11].includes(i)){
            continue;
        }
            total+=cost[i]
        
    }
    return total
};
