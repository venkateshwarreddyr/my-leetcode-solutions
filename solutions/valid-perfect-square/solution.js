// Problem: Valid Perfect Square
// LeetCode: https://leetcode.com/problems/valid-perfect-square/
// Language: javascript
// Runtime: 122 ms
// Memory: 38.3 MB
// Submitted: 2022-01-07

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
        let low = 0
    let high = num;
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(num===mid*mid){
            return true
        }
        else if(num > mid*mid)  low = mid+1
        else high = mid-1
    }
    return false
    
    
    // for(let i=1;i<=num;i++){
    //     if(i*i === num){
    //         return true
    //     }else if(i*i > num){
    //         return false
    //     }
    // }
    // return false
};
