// Problem: Bitwise AND of Numbers Range
// LeetCode: https://leetcode.com/problems/bitwise-and-of-numbers-range/
// Language: javascript
// Runtime: 3 ms
// Memory: 63 MB
// Submitted: 2025-07-03

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let countBits = (n) => {
    let count = 0;
    while(n!=0){
        count++
        n = n>>1
    }
    return count
    }
    if(left === right) return left;
    let binL = countBits(left);
    let binR = countBits(right);
    if(binL===binR){
        let res = 0;
        while(binL!=0){
            let x = left>>(binL-1)&1;
            let y = right>>(binL-1)&1;
            if(x!=y) break;
            res+=Math.pow(2,binL-1)*x;
            binL--;
        }
        return res;
    }
    return 0;
};
