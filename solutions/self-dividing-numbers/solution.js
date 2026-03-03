// Problem: Self Dividing Numbers
// LeetCode: https://leetcode.com/problems/self-dividing-numbers/
// Language: javascript
// Runtime: 69 ms
// Memory: 45.2 MB
// Submitted: 2023-05-10

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let an = [];
    
    for(let i=left; i<=right; i++){
        if(i.toString().split("").reduce((a,c) => a && i%(Number(c)) === 0,true)){
            an.push(i)
        }
    }
    
    return an;
};
