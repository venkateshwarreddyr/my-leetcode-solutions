// Problem: Sqrt(x)
// LeetCode: https://leetcode.com/problems/sqrtx/
// Language: javascript
// Runtime: 84 ms
// Memory: 40.3 MB
// Submitted: 2021-07-05

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
        let low = 0
    let high = (x)/2+1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(x === mid*mid){
            return mid;
        }
        else if(x > mid*mid)  low = mid+1;
        else high = mid-1;
    }
    return high
};
