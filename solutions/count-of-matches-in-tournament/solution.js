// Problem: Count of Matches in Tournament
// LeetCode: https://leetcode.com/problems/count-of-matches-in-tournament/
// Language: javascript
// Runtime: 80 ms
// Memory: 38.8 MB
// Submitted: 2021-07-30

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    
    if(n === 1) return 0
    if(n === 2) return 1
    let matches = 0;
    
    if(n%2 ===1){
        matches = parseInt(n/2)+1
        n = matches - 1
    }else{
        matches = n/2
        n = matches
    }
    
    
    
    return matches + numberOfMatches(n)
};
