// Problem: Pass the Pillow
// LeetCode: https://leetcode.com/problems/pass-the-pillow/
// Language: javascript
// Runtime: 55 ms
// Memory: 48.8 MB
// Submitted: 2024-07-06

/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    
    let x = 1;
    let count = 1;
    while(time!=0){
        count+=x
        if(count===n){
            x=-1
        } else if(count===1) {
            x=1;
        }
        time--
    }
    
    return count;
};
