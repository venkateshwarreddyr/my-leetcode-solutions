// Problem: Maximum Number of Balls in a Box
// LeetCode: https://leetcode.com/problems/maximum-number-of-balls-in-a-box/
// Language: javascript
// Runtime: 98 ms
// Memory: 42.7 MB
// Submitted: 2023-05-11

/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(ll, hl) {
    let ob = {};
    for(let i=ll;i<=hl;i++){
        let x = i;
        let s = 0;
        while(x>0){
            s+=(x%10)
            x = Math.trunc(x/10)
        }
        ob[s] = (ob[s] || 0) + 1
    }
    
    return Math.max(...Object.values(ob))
};
