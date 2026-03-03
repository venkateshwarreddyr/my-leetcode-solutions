// Problem: Happy Number
// LeetCode: https://leetcode.com/problems/happy-number/
// Language: javascript
// Runtime: 2 ms
// Memory: 54.5 MB
// Submitted: 2025-07-03

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let N = [];
    while(n!=1){
        let ans =0;
        N.push(n)
        while(n!=0){
            ans += (n%10) ** 2;
            n=Math.floor(n/10);
        }
        if(N.includes(ans)) return false
        n = ans
    }
    return true;
};
