// Problem: Stone Game
// LeetCode: https://leetcode.com/problems/stone-game/
// Language: javascript
// Runtime: 72 ms
// Memory: 38.8 MB
// Submitted: 2021-08-05

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    return true
    let isAlex = true;
    let score = [0,0]
    while(piles.length){
        console.log(piles)
        if(piles[0]>=piles[piles.length-1]){
            score[isAlex?0:1]+=piles.shift()
        }else{
            score[isAlex?0:1]+=piles.pop()
        }
        
            isAlex = !isAlex
    }
    
    return score[0]>score[1]
};
